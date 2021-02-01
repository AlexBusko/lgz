import React from "react"
import { Container } from 'react-bootstrap';
import "./style.scss";
import Brands from "../Brands/Brands";

const AboutUs = () => {
    return (
        <Container className="about-us" >
            <h1>Львівський лікеро-горілчаний завод</h1>

            <p>ПрАТ «Львівський лікеро-горілчаний завод» - підприємство з багатолітньою історією. Початки виробництва сягають 1931 року, коли завод успішно конкурував з приватними підприємствами, мав горілчані склади, магазини в усіх воєводствах Галичини. На теренах пострадянського простору Львівське підприємство було одним із трьох найпотужніших лідерів лікеро-горілчаної промисловості і першим освоїло випуск натурального спиртового оцту на базі німецької технології. Впродовж всієї своєї історії завод випускав якісні та ексклюзивні види алкогольних напоїв: горілки, лікери, настоянки, постійно розширюючи асортимент та вдосконалюючи технологію виробництва.</p>

            <p>Продукція Львівського лікеро-горілчаного заводу добре відома й високо оцінена не лише в Україні, а й за її межами, про що свідчать численні нагороди. Львівська горілка виробляється із натуральних компонентів. В технологічному процесі використовується високоякісний зерновий спирт класу «Люкс», «Екстра» і вода, яка проходить відповідну підготовку на сучасному обладнанні. Горілка очищується фільтрами з деревним вугіллям і кварцовим піском для надання їй особливої чистоти та м'якості.</p>

            <p>Лікери виробляються з натуральних соків, виготовлених із ягід екологічно чистого Карпатського краю. Популярність львівських горілок та лікерів досягнута завдяки різноманітному асортименту і стабільно високій якості.
</p>
            <Brands />
        </Container >

    );

}

export default AboutUs;