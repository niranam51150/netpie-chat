# NETPIE-CHAT (by microgear html5)

โปรเจคศึกษา ค้นคว้า วิธีทำงาน และวิธีใช้งาน Micrigear HTML5
ด้วยการสร้าง Web Appication ในรูปแบบ Chat Room โดยพัฒนาจากของเดิมที่ทาง NETPIE มีอยู่แล้ว
https://github.com/netpieio/microgear-html5

##NETPIE คืออะไร ?

NETPIE คือ cloud platform ที่ให้บริการในรูปแบบ Platform-as-a-Serviceเพื่อจะอำนวยความสะดวกให้กับนักพัฒนาสามารถพัฒนาให้อุปกรณ์ของตัวเองเชื่อมต่อและแลกเปลี่ยนข้อมูลกันได้ในแบบ Internet of Things NETPIE ช่วยคุณได้อย่างไร Leave the logistics of connectivity to us : NETPIE ช่วยให้อุปกรณ์สามารถคุยกันได้โดยผู้พัฒนาไม่ต้องกังวลว่า อุปกรณ์นั้นจะอยู่ที่ใด ทั้งในแง่ physical และ logical เพียงนำ NETPIE agent library ไปติดตั้งในอุปกรณ์ และ NETPIE จะรับหน้าที่ดูแลการเชื่อมต่อให้ทั้งหมด ไม่ว่าอุปกรณ์นั้นจะอยู่ในเครือข่ายชนิดใด ลักษณะใด หรือแม้กระทั่งเคลื่อนย้ายไปอยู่ที่ใด ผู้พัฒนาสามารถตัดปัญหากวนใจในการที่จะต้องมาออกแบบการเข้าถึงอุปกรณ์จากระยะไกล (remote access) ด้วยวิธีแบบเดิมๆ เช่น การใช้ fixed public IP หรือการตั้ง port forwarding ในเราเตอร์ หรือการต้องไปลงทะเบียนกับผู้ให้บริการ dynamic DNS ซึ่งทั้งหมดล้วนมีความยุ่งยากและลดความยืดหยุ่นของระบบ

อ้างอิงจาก : https://netpie.io/netpie-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3/

##Microgear คืออะไร ?

Microgear เป็นซอฟต์แวร์ไลบรารี่ ที่ติดตั้งในอุปกรณ์ที่ต้องการสื่อสารกับ NETPIE คุณสามารถดาวน์โหลด Microgear ได้ที่ GitHub (https://github.com/netpieio) เนคเทคอนุญาตให้นำ Microgear ไปใช้ได้แบบ Opensource ตามสัญญาอนุญาตให้ใช้สิทธิแบบ ISC License ซึ่งอนุญาตให้ทำซ้ำ ดัดแปลง และ/หรือส่งต่อไลบรารี่นี้ได้ ในการใช้งานเชิงสาธารณประโยชน์และเชิงพาณิชย์ ISC License Copyright (c) 2015, NECTEC <@nectec.or.th> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this

อ้างอิงจาก : https://netpie.io/microgear-library-2/

##ทำความรู้จัก Microgear HTML5 พระเอกของงานนี้

microgear-html5 คือ client library ที่ทำหน้าที่เป็น client library ของ NETPIE ที่จะเปลี่ยน web browser ให้เป็น microgear เพื่อสื่อสารกับ microgear ใน platform อื่นๆ ไม่ว่าจะเป็น arduino, raspberry pi หรือ computer เพื่อการพัฒนา IOT application คุณสามารถนำ library นี้ไปพัฒนา IOT console หรือ mobile application ได้โดยการเขียนโปรแกรมเขียนโปรแกรมภาษา HTML/JavaScript ที่คุณคุ้นเคย

##Microgear HTML5 รองรับเบราเซอร์อะไรบ้าง ?
- Chrome
- Firefox
- Opera

ศึกษาข้อมูลเพิ่มเติมเกี่ยวกับ Microgear HTML5 ได้ที่
https://github.com/netpieio/microgear-html5