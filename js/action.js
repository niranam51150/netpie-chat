$(document).ready(function() {
		$('#main').fadeIn('slow');

		//////  Set NETPIE  /////
		const APPID = "netpiechat";
		const APPKEY = "XOqFw4afwHEmN2B";
		const APPSECRET = "43xogwu8XYwOFoVS8OHPOyzOtUCRO6";

		// Create Microgear Object //
		var microgear = Microgear.create({
			gearkey: APPKEY,
			gearsecret: APPSECRET
		});

		microgear.on('connected', function() {
			var name = $('#name').val();

			microgear.setname(name);
			microgear.subscribe('/chat');
			connect_button();
			console.log('microgear connect');

			microgear.publish("/chat", "newconnect#" + name);
		});

		microgear.on('rejected', function(info) {
			disconnect_button();
			console.log('Connection rejected: ' + info);
		});

		microgear.on('error', function(err) {
			disconnect_button();
			console.log('Error: ' + err);
		});

		microgear.on("message", function(topic,msg) {
			console.log(msg);

			var name = $('#name').val();
		    var msgi = msg.split("#");

		    if(msgi[0] == "msg" && msgi[1] == name) {
		    	var message = $('<div class="message-me">' + msgi[2] + '</div>');
		    	append_message(message);
		    }
		    else if(msgi[0] == "msg" && msgi[1] != name) {
		    	var message = $('<div class="message-other"><a>' + msgi[1] + ' : </a> ' + msgi[2] + '</div>');
		    	append_message(message);
		    }
		    else if(msgi[0] == "newconnect" && msgi[1] != name) {
		    	appent_user(msgi[1]);
		    	microgear.chat(msgi[1], "nameonline#" + name);

		    	var message = $('<div class="message-system">ยินดีต้อนรับ ' + msgi[1] + ' เข้าสู่ห้องแชท</div>');
				append_message(message);
		    }
		    else if(msgi[0] == "nameonline") {
		    	appent_user(msgi[1]);
		    }
		    else if(msgi[0] == "bye") {
		    	$('.list-name[data-name="' + msgi[1] + '"').remove();

		    	var message = $('<div class="message-system">' + msgi[1] + ' ออกจากห้องแชท</div>');
		    	append_message(message);
		    }
		});

		function connect_button() {
			// style button for connected status
			$('#connect').prop('disabled', false);
			$('#connect').removeClass('mdl-button--colored');
			$('#connect').addClass('mdl-button--accent');
			$('#connect').text('disconnect');

			$('#input-message').prop('disabled', false);
			$('#send-message').prop('disabled', false);
		}

		function connecting_button() {
			// style button for connecting status
			$('#name').prop('disabled', true);
			$('#connect').prop('disabled', true);
			$('#connect').text('connecting...');
		}

		function disconnect_button() {
			// style button for disconnect status
			$('#name').prop('disabled', false);
			$('#connect').prop('disabled', false);
			$('#connect').removeClass('mdl-button--accent');
			$('#connect').addClass('mdl-button--colored');
			$('#connect').text('connect');

			$('#input-message').prop('disabled', true);
			$('#send-message').prop('disabled', true);
		}

		function appent_user(username) {
			var item = $('<li class="mdl-list__item list-name" data-name="' + username + '"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-icon">person</i>' + username + '</span></li>');

			$('#list-online').append(item);
		}

		function disconnect_status() {
			$('.list-name').remove();
			microgear.publish('/chat', 'bye#' + $('#name').val());
			disconnect_button();
		}

		function send_message(message) {
			microgear.publish("/chat", "msg#" + $('#name').val() + "#" + message);
			$('#input-message').val('');
		}

		function append_message(message) {
			$('#chat-area').append(message);
		    autoscroll();
		}

		function autoscroll() {
			$('#chat-area').animate({scrollTop: $('#chat-area')[0].scrollHeight});
		}

		$(window).unload(function() {
			disconnect_status();
		});

		$('#connect').click(function() {
			var name = $('#name').val();
			var button = $(this).text();

			if(name != "") {
				if(button == 'connect') {
					connecting_button();
					microgear.connect(APPID); // Connect microgear
				}
				else if(button == 'disconnect') {
					disconnect_status();
					microgear.unsubscribe('/chat');
					microgear.client.disconnect();
					microgear.client = null;
					console.log('disconnect');
				}
			}
			else alert("Please enter your name.");
		});

		$('#name').keypress(function(e) {
			var name = $(this).val();

			if(e.which == 13 && name != "") {
				connecting_button();
				microgear.connect(APPID); // Connect microgear
				return false;
			}
			else if(e.which == 13 && name == "") {
				alert('Please enter your name.');
				return false;
			}
		});

		$('#send-message').click(function() {
			var message = $('#input-message').val();

			if(message != "") {
				send_message(message);
			}
		});

		$('#input-message').keypress(function(e) {
			var message = $(this).val();

			if(e.which == 13 && message != "") {
				send_message(message);
				return false;
			}
			else if(e.which == 13 && message == "") {
				return false;
			}
		});

		$(".mdl-layout__content").scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});

		$('.scrollToTop').click(function(){
			$('.mdl-layout__content').animate({scrollTop : 0}, 800);
			return false;
		});

});