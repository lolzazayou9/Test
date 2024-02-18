function checkCode() {
    var input = document.getElementById("codeInput").value;
    var messageElement = document.getElementById("message");
    // เช็ครหัสโค้ดที่กรอก
    if (input === "ภู") {
        messageElement.innerHTML = "คอนเกรทคับหนุ่มศิลปากร ขอให้รักกับหวานใจนานๆ ประสบความสำเร็จ ไม่โดนแกล้ง ไม่โดนไอเจมด่าบ่อยๆ ได้อยู่กับแฟนเย้อๆ ขอบคุณที่เป็นตัวฮามาก 6 ปี เพราะโดนแกล้ง เสียดายที่พึ่งมาสนิทกันช่วงหลังๆ แต่ก็แฮปปี้มากๆรักคับเกภู";
    } else if (input === "โพสต์") {
        messageElement.innerHTML = "คอนเกรทเพื่อนรัก ถึงไม่ค่อยได้คุยกันแต่ทุกครั้งที่ได้คุยรู้สึกเหมือนสนิทกันมากๆ ผูกพันธ์ พรหมลิขิตสุดๆ 10 ปีแหน่ะที่อยู่ด้วยกัน เบื่อหน้า หยอก สนุกมาก ขอบคุณที่เป็นสีสัน ขอให้เจอแต่คนจริงใจนะ ขอให้ไม่มีคนมาทำร้ายจิตใจมึงอีก รักโพสต์ TT";
    } else if (input === "เซน") {
        messageElement.innerHTML = "คอนเกรทคับเซน ขอบคุณที่เป็นเพื่อนที่ดีมาตลอด สร้างเสียงหัวเราะ เซนเป็นคนใจดีคนนึงเลย พึ่งได้มาคุยกันบ่อยๆ ช่วงม.6 เสียดายอยากอยู่ด้วยกันต่ออีก อยากเล่นแวร์วูฟกับเซนอีกสนุกมากๆๆๆๆๆๆ ขอบคุณเซนที่มาทำให้ห้องไม่ตึง อ้อนวอนครูให้ปล่อยไวหรือไม่สอนได้ รักเซน";
    } else if (input === "เจม") {
        messageElement.innerHTML = "คอนเกรทจั้ฟหนุ่มศิลปากร ที่คิดถึงคนเก่าเก่งที่สุดในโลก แล้วก็เม็ดเยอะมากๆ เหมือนกันครับ ไอสัด ขอบคุณที่เล่นเกมด้วยกัน ไปไหนมาไหนด้วยกัน ชวนไปไหนก็ไป โคตรเจ๋ง หาแบบนี้ได้ที่ไหนอีก แล้วก็เลิกเมาแล้วเรื้อนครับ เดี๋ยวไปกินกับคนอื่นเขาจะตกใจ";
    } else if (input === "ฟิล์ม") {
        messageElement.innerHTML = "คอนเกรทหนุ่มเกษตร อยากไปสวนมึงสักครั้งในชีวิต อยากนั่งรถมึงอีก อยากแปะมือกับมึงอีก อยากจั้กจี้มึงอีก เส้าว่ะ ขอให้เจอเพื่อนดีๆ ขอให้เธอคนนั้นรับรัก ไม่ก็เจอสาวที่จริงใจ แล้วเขารับรัก มีความสุขมากๆ";
    } else if (input === "กั้ง") {
        messageElement.innerHTML = "คอนเกรทครับ พึ่งเคยกินเหล้าด้วยกันมึงก็เป็นเฮลบอยหรอ เท่มาก ขอให้เรียนไม่เครียด เจอเพื่อนดีๆ สังคมดีๆ คับหนุ่มวิทย์คอม อาจจะได้คุยกันบ่อยๆ ถ้ากูติดวิศวะคอม TT ตั้งใจเรียน เรียนเก่งๆมาสอนกูดวยครับ ขอให้ได้ไปคอน ไว้มีตัง มีคอนจูบชีวิตจะชวนไปด้วยกัน เย่ะ ขอบคุณที่เป็นเพื่อนกันมาหกปีคับ";
    } else if (input === "ปิ") {
        messageElement.innerHTML = "ปิติพง คอนเกด ขอให้ได้เป็นหนุ่มวิศวะคอมสมใจอยาก ขอให้รวยๆ ขอบคุณที่เดินไปไหนด้วยตลอด คนที่เดินเก่งที่สุดในโลกบ่ ขอบคุณที่เป็นคนฉลาดมาตลอด สอนคณิตฟิสิกส์ให้ตลอดเวลาถาม แต่กวนตีน ขอให้เจอเพื่อนดีดี สาธุ";
    } else if (input === "โอโม่") {
        messageElement.innerHTML = "คอนเกรทคับนักแต่งคำคมบาดตูด ขอบคุณโม่ที่เป็นสีสัน ฮาบ้างตึงบ้าง แต่ไม่มีโม่ก็คงเหงาๆ ขอบคุณที่สอนคณิตฟิสิกส์ ขอบคุณที่เล่นเกมด้วยกัน ขอให้ความรักครั้งถัดๆไปของโม่จะสมหวังแบบที่ตั้งใจนะ เป็นกำลังใจ ";
    } else if (input === "เนปจูน") {
        messageElement.innerHTML = "คอนเกรทนอจอ ขอบคุณที่ใจดีใจเย็นกับกูตลอด ขอบคุณที่ตลก ขอบคุณที่รับฟัง เนปจูนให้คำปรึกษาดีมากๆ รับฟังดีสุดๆ ไม่มีมึง กูคงแย่กว่านี้มากๆ ขอบคุณที่รักกันคับ ขอบคุณที่รับกูเป็นเพื่อน ขอบคุณที่ยังสนิทกันถึงจะไม่ค่อยได้คุยกันเหมือนแต่ก่อน รักเนปเท่าโลก";
    } else if (input === "ต้า") {
        messageElement.innerHTML = "คอนเกรทครับมินาต้า และพึ่งมาสนิทมาคุยกันบ่อยตอนม.6 อยากคุยอยากเห็นมึงทำไรเบียวๆที่โรงเรียนอีก ทำไมพึ่งเปิดตัว อินโทรเวิร์ดมานานเกิร กว่าจะคุยกับเพื่อนๆ จะจบอยู่ละะ ไปมหาลัยก็คุยกับคนอื่นสนิทกับคนอื่นๆ ไวๆกว่านี้หน่อยเด้อสุดหร่อ มึงหล่อมากเลิกเขินหน้าตัวเองสักที การได้เห็นหน้าพี่มีผลต่อชีวิตของคนในโรงเรียนมากค่ะ";
    } else if (input === "มิเกล"){
        messageElement.innerHTML ="คอนเกรทมิเกลคนสวย ตัวเล็กน่ารัก ขอให้สมหวังกับชีวิตมหาลัย ขอให้เจอหนุ่มที่จริงใจ เพื่อนที่จริงใจ ถึงจะไม่ค่อยได้คุยกับเกลแต่เกลน่ารักมากๆ เกลครบเครื่องสุดๆ สวยน่ารักใจดีเรียนเก่งขยัน เอาใจไปเลย ขอบคุณที่เป็นเพื่อนกันคับ";
    } else if (input === "มะยม"){
        messageElement.innerHTML = "คอนเกรทมะยมตัวเร่ก มะยมเดอะแบก มะยมโหดมาก ถึงจะมาสนิทกับช่วงมอห้าหลังๆ แต่มะยมก็เปิดใจให้เรา มะยมใจดีแต่ก็ดุในเวลาเดียวกัน ขอบคุณมะยมที่จริงจังกับทุกๆ งาน ทุ่มให้ทุกๆ งานจะมีใครทำงี้ได้อีกมั้ย ดีมากที่มีมะยมเป็นเพื่อน ขอบคุณที่ไปต่อแถวกินข้าวเป็นเพื่อนบ่อยๆ รักมะยม";
    } else if (input === "สรวง"){
        messageElement.innerHTML = "คอลเกรตนาตาลี ขอบคุณที่ใส่ใจ ไม่อยากให้รู้สึกเป็นส่วนเกิน ถึงจะมาที่หลัง ขอบคุณที่เป็นสีสัน เป็นที่ปรึกษาที่รับฟัง ขอบคุณที่เป็นอีกขั้วความคิดบวกของกูเพราะในหัวกูมีแต่ความคิดลบๆ ขอบคุณที่เป็นเพื่อนกันมา ชวนไปไหนก็ไป อาจจะกวนตีนไปบ้างแบบรู้ตัวมั้ยไม่รู้ ขอให้เจอแต่เพื่อนดีดีในอนาคตจ้า บ้านอยู่ใกล้กันแค่นี้ไว้ไปหาไรกินด้วยกันจั้ฟ";
    } else if (input === "ชมพู่"){
        messageElement.innerHTML = "คอนเกรทค่าฟ สาวแส่บ ชอบมึงมากเป็นไอดอลในการกล้าแต่งตัวทำนู่นนี่ ถึงบางทีมึงจะกล้ามากไปถึงขั้นทาเล็บแดงมาโรงเรียนก็เถอะ แต่มหาลัยมึงได้ทำเต็มที่ละ ขอบคุณที่รับฟังกูตอนนั้น กูกลัวมากๆว่ามึงอาจจะไม่ชอบกูไปเลยก็ได้ มึงอาจจะคิดว่าเรื่องแค่นี้กูจะอะไรเยอะแยะ แต่มึงก็ปรับจริงๆ คิดว่าจะเลิกคุยกับกูไปสักพักแต่มึงคุยกับกูเหมือนปกติแค่เบาๆลงแบบที่กูขอ ขอบคุณมากๆ ซึ้งใจ ขอให้ได้ผัวรวยๆขับรถสปอร์ตนะงับอ้วร";
    } else if (input === "แบงค์"){
        messageElement.innerHTML = "คอนเกรทพี่แบงค์ ตอนไม่สนิทกับแบงค์คิดว่าแบงค์เด็กเรียนจ๋าเลย แต่พอได้มาสนิทก็เห็นอีกมุมมของแบงค์ ตัวตึงเล่นเกม เล่นตลอดเวลาว่างของจริง ขอบคุณแบงค์ที่เปิดใจให้กัน ขอบคุณแบงค์ที่ใจเย็นในหลายๆเรื่อง แบงค์ใจดีมากก แบงค์รับฟังความเห็นตลอดไม่ว่าจะดีหรือไม่ดี ถึงทำงานกลุ่มออกมาไม่ดีแบงค์ก็ไม่โกรธ แต่แบงค์ช่วยคิดวิธีแก้ปัญหา หายากมากๆคนแบบนี้ เป็นเราคงหงุดหงิดก่อน ขอบคุณแบงค์ที่เป็นเพื่อนกันคับ";
    } else if (input === "เปรมมิ"){
        messageElement.innerHTML = "คอนเกรทเปรมมิ รักเปรมมิ ขอบคุณที่ใจดี ใจเย็น มีน้ำใจ คิดถึงคนอื่นๆก่อนตลอด เปรมนิสัยดีมากๆ เป็นผู้นำที่ดี รับฟังทุกความเห็น ไม่ค่อยเห็นเปรมหัวร้อนเลยนอกจากตอนโดนไอฟิล์มแกล้ง ขอบคุณวันนั้นที่ทำให้เราได้นั่งข้างกัน รู้สึกดีมากๆ เปรมทำให้เราตั้งใจเรียนแบบสุดๆ ส่งการบ้านครบ ตามงานตลอด ขอบคุณมากๆจริงๆ";
    } else if (input === "พลอย"){
        messageElement.innerHTML = "คอนเกรทครับว่าที่แพทย์หญิงพลอยชมพู ขอบคุณพอยที่ใจดี น่ารัก ใส่ใจมากๆๆๆๆ ซึ้งบางเรื่องเล็กๆน้อยๆ ปล่อยผ่านได้พลอยก็ยังมาขอโทษ รู้สึกดีมากๆที่มีคนคิดถึงใจกันมากขนาดนี้ ขอบคุณพอย ถึงจะอยู่กันมา 6 ปีแต่พึ่งมาสนิทช่วง 2 ปีหลัง ก็แฮปปี้มากๆ พอยให้คำปรึกษาดี พอยพูดเพราะด้วยถึงจะเป็นเพื่อนกัน หายากสุดๆของแรร์ รักพอย";
    } else if (input === "หมวย"){
        messageElement.innerHTML ="คอนเกรทหมวยเล็กกกก ถึงจะไม่ค่อยได้คุยกัน แต่หมวยเก่งมากๆนะที่อยู่ในห้องคนเดียวโดยที่เพื่อนสนิทหมวยอยู่ห้องอื่นหมดเลย หมวยเก่งมากๆ เก่งอีกที่มีแต่คนชอบพูดอะไรแย่ๆหรือใส่อารมณ์ใส่หมวย แต่หมวยก็นิ่งๆใส่ ไม่เคยเห็นหมวยด่าใคร หรือหงุดหงืดใส่ใครเลย หมวยเก่งมากๆ รักหมวย มีไรมาคุยกันได้ตลอดเลยนะ ขอให้สมหวังกับชีวิตคับ";
    }else if (input === "เมเม"){
        messageElement.innerHTML = "คอนเกรทเมเม ขอบคุณเป็นที่เป็นสีสันให้ห้อง เมใจดี ถึงจะมีปากร้ายบ้าง แต่ลึกๆแล้วเมใจดีมากๆ เมนึกถึงใจคนอื่น ขี้สงสาร ขอบคุณเมที่ใส่ใจงานห้อง ฟังความเห็นของเพื่อนๆ ในห้องทุกคนก่อนตัดสินใจอะไรในงานห้อง เป็นผู้นำงานกลุ่มงานห้องได้ดีคนนึงเลย ขอให้เมมีความสุขมากๆ แบบที่น้องหมาๆก็มีความสุขเวลาเมไปเล่นหรือให้ของกินนะคับ";
    }else if (input === "แป้ง"){
        messageElement.innerHTML = "คอนเกรทไอแป้ง ขอให้ได้เรียนที่อยากเรียน มีความสุขมากๆ รักกับไอกรนานๆ อย่าทะเลาะกันบ่อย อย่าคิดมาก ขอบคุณที่เป็นเพื่อนกูมาตั้งแต่มอหนึ่ง ถึงจะมีหายๆจากกันไปบ้างแต่สุดท้ายเราก็วนมาเจอกันสนิทกันอยู่ดี ขอบคุณที่ปัญญาอ่อนเวลาเครียดๆ ขอบคุณที่ทำให้เวลาตึงๆหายตึง มึงเป็นสีสันในชีวิตกูสุดๆ ยังอยากนั่งข้างมึงอยู่เลย แม่งเอย ไปเรียนมหาลัยมึงเรียนด้วยนะไอสัดไม่ใช่นอน";
    }else if (input === "วิว"){
        messageElement.innerHTML = "คอนเกรทวิววี่ ขอบคุณที่เป็นเพื่อนกัน ขอบคุณวิวที่ใจดีตลอด วิวเก่ง วิวสวย วิวน่ารัก อย่าให้มีคำพูดใครมาทำร้ายจิตใจวิวอีกนะ ขอบคุณวิวที่เลี้ยงดูทุกคนตอนเมา วิวเป็นแม่ของแทร่ ขอให้เจอพ่อของลูกที่จริงใจลูกวิวต้องนิสัยดีน่ารักมากแน่แน่ แม่ดีขนาดนี้ ยังอยากกอดวิวอยู่เลย แต่คงจะไม่ค่อยได้เจอกันละ รักวิว";
    }else if (input === "ข้าวฟ่าง"){
        messageElement.innerHTML = "คอนเกรทคับครูอนุบาล ฟ่างผ่านอะไรมาเยอะมากตอนมอปลาย ฟ่างเก่งมากๆ ขอให้มันเป็นเรื่องที่สอนฟ่างนะ ถึงจะดูโหดไปหน่อยแต่ฟ่างเปลี่ยนตัวเองได้ ฟ่างเก่งมากๆ ที่รับฟังเพื่อน ขอบคุณที่เป็นสีสันให้ห้องมาสามปี ฟ่างใจดีมากถึงจะดูโหดแต่ใจดี รักฟ่าง รักกับพี่ตี๋นานๆ ";
    }else if (input === "อิ้ง"){
        messageElement.innerHTML ="ขึ้นมอปลายมาไม่ค่อยได้คุยกันเลย คิดถึงมึงนะ อยู่ด้วยแล้วกูมีความสุขมากๆ ปัญหาชีวิตมึงเยอะมาก ขอให้ขึ้นมหาลัยไปมีแต่เรื่องดีดีนะ เจอเพื่อนดีๆ สังคมดีดี รักมึงครับอิ้ง ขอบคุณที่ให้ลอกงานบ่อยๆถึงจะคนละห้อง อยากไปเที่ยวกับมึงอีก สนุกมากๆ";
    }else if (input === "วุ้นเส้น"){
        messageElement.innerHTML = "คอนเกรทวอสอ ขอให้สมหวังกับมธ ขอให้รักกับแฟนนานๆ มีความสุขมากๆ รักวุ้นเส้น มึงเก่งมาก จากคนที่เดินถ่ายรูปทั้งวัน คนรู้จักเยอะ เป็นสส ได้มาเป็นประธานนักเรียน แล้วตอนมึงเป็นประธานคือดีมาก มึงใส่ใจมาก มึงเก่งมากๆที่เรียนด้วยทำหน้าที่ไปด้วยได้ รับฟังความเห็นคนอื่น กล้าแสดงออก เป็นผู้นำที่ดี ถึงจะมึนๆบ้าง รักมึงนะ ยังอยากทักมึงแล้วมึงตอบเสียงดังๆทำท่าแปลกตอนเดินเจอกันอยู่เลย หกปีผ่านไปไวชิบหาย อยู่กับมึงหัวเราะตลอดเลย รักวุ้น";
    }else if (input === "ฟาง"){
        messageElement.innerHTML ="คอนเกรทคับฟออางอ รักฟาง จากคลิปอ่ะแหละ ขอโทษที่เมื่อก่อนเคยอคติ จริงๆแล้วคืออิจฉาแหละ ไม่รู้ฟางรู้มั้ย แต่เสียใจคับที่เคยทำแบบนั้น ทั้งๆที่ฟางก็ดีด้วยตลอด ใจดีมากๆ เป็นคนรวยที่ไม่ได้เอามาอวด หรือว่างก ฟางใจดีมาก รักฟาง";
    }else if (input === "ใบบัว"){
        messageElement.innerHTML = "คอนเกรทบีบี ดีใจที่ครั้งนึงเคยได้สนิทกับบัวแบบมากๆ แล้วก็เคยทะเลาะกันแรงๆเหมือนกัน แต่บัวก็กลับมาคุยกันตลอด บัวเก่งมากที่ผ่านปัญหาเยอะแยะตอนนั้นมาได้ บัวสวยมากๆ อย่ากังวลว่าตัวเองไม่สวยเลย มั่นใจในตัวเองเย้อๆ ไปอยู่จีนขอให้มีความสุข ได้หนุ่มจีนที่จริงใจมาเป็นแฟน รักบีบี";
    }else if (input === "เฟิร์น"){
        messageElement.innerHTML = "คอนเกรทเฟิร์นคั้บ มีความสุขมากๆ ถึงจะไม่ค่อยได้คุยกันแต่เจอแล้วเฟิร์นโบกมือยิ้มให้ตลอดเลย ขอให้เฟิร์นสมหวังกับทุกๆเรื่องเลย เรื่องความรักขอให้เฟิร์นเจอคนจริงใจรักกันนานๆ เฟิร์นสวยมากๆๆ ขอบคุณที่เป็นเพื่อนกันคับ";
    }else if (input === "มิก"){
        messageElement.innerHTML = "คอนเกรทครับพี่มิกกี้ ขอบคุณที่เป็นเพื่อนเล่นเกมกัน ขอบคุณที่ชวนเล่นเกม หรือเวลาชวนมิกเล่นเกมก็มาเล่นด้วย มีความสุขมากๆคับผม โชคดีกับเส้นทางที่เลือกคับ";
    }else if (input === "หมิง"){
        messageElement.innerHTML = "คอนเกรทคับหมิง เสียใจที่รู้จักกันช้าไป แต่ถึงพึ่งรู้จักแต่ก็คุยกันเหมือนรู้จักกันนานแล้ว ดีมากๆ ไม่เกรงเลย หมิงเปิดใจ ใจกว้างรับทุกคนสุดๆ ขอให้สมหวังกับความรักเจอคนจริงใจ มีความสุขมากๆคับ";
    }else if (input === "พอแล้ว"){
        messageElement.innerHTML = "คอนเกรทคับ พอแล้วน้องชายพี่ เองเท่มาก ที่มาคุยมาเล่นกับพี่พี่แบบไม่เกรงกลัวใคร พอแล้วยิ้มน่ารักมาก มีความสุขมากๆ ขอให้ไปถึงเป้าหมายที่วางไว้คับ ดีใจที่ได้เจอ ได้คุย ได้เล่น กับพอแล้วนะะะ ";
    }else if (input === "พอแร้ว"){
            messageElement.innerHTML = "คอนเกรทคับ พอแล้วน้องชายพี่ เองเท่มาก ที่มาคุยมาเล่นกับพี่พี่แบบไม่เกรงกลัวใคร พอแล้วยิ้มน่ารักมาก มีความสุขมากๆ ขอให้ไปถึงเป้าหมายที่วางไว้คับ ดีใจที่ได้เจอ ได้คุย ได้เล่น กับพอแล้วนะะะ ";
    } else {
        messageElement.innerHTML = "ไม่พบชื่อ " + input + " ในรายชื่อ";
    }
}

