import img1 from "../assets/pages/img1.jpg"
import img2 from "../assets/pages/img2.jpg"
import img3 from "../assets/pages/img3.png"

import adv1 from "../assets/advantagesImg/adv1.png"
import adv2 from "../assets/advantagesImg/adv2.png"
import adv3 from "../assets/advantagesImg/adv3.png"
import adv4 from "../assets/advantagesImg/adv4.png"
import adv5 from "../assets/advantagesImg/adv5.png"
import adv6 from "../assets/advantagesImg/adv6.png"

import item1 from "../assets/catalog/бри.jpg"
import item2 from "../assets/catalog/brus.png"
import item3 from "../assets/catalog/doska.jpg"
import item4 from "../assets/catalog/raspalki.png"
import item5 from "../assets/catalog/nalichnik-derevjannyj.jpg"
import item6 from "../assets/catalog/obshivka.jpg"

import stran from "../assets/stran2.png"

import tech1 from "../assets/slide1.jpg"


export  type stateType = {
    pages: Array<pagesType>;
    advantages: Array<AdvantageType>;
    catalog: Array<ItemType>;
    countries: Array<pagesType>;
    texts: Array<TextType>;
    technologies: Array<pagesType>
}

export  type pagesType = {
    id: number;
    img: string;
    h2: string;
    text: string;
}

export type AdvantageType = {
    id: number;
    img: string;
    text: string;
}

export type ItemType =
    {
        id: number;
        name: string;
        img: string;
        text: string;
        price: string;
    }

export type TextType = {
    text: string;
}

export let state: stateType =
    {
        pages: [
            {
                id: 1,
                img: img1,
                h2: "О компании",
                text: "<b>ООО «РВМ-Инвест»</b> устоявшееся  предприятие со своими традициями и историей. Мы занимаемся производством и реализацией продукции  лучшего качества из древесины хвойных пород как на внутренних рынках Республики Беларусь, так и за её пределами. <br> <br>Наша история – это более 20 лет успешного высококвалифицированного труда, ответственного подхода к работе и смелых решений, ориентированных на максимально высокий уровень сотрудничества.<br> <br> В 2015 году произошел новый виток развития компании РВМ-Инвест –  внедрение современного безотходного оборудования, которое позволило производить брикеты и топливные распалки. На сегодняшний день мы продолжаем развиваться, отслеживаем и оперативно внедряем в производственный процесс новые технологии, что позволяет нам перерабатывать от 300 до 400 кубических метров круглого лесоматериала из сосны.<br><br>  <a href='../About'>Подробнее</a> "
            },
            {
                id: 2,
                img: img2,
                h2: "Наше производство",
                text: "При изготовлении пиломатериалов в первую очередь необходимо обращать внимание на качество сырья – круглого леса. Низкосортная древесина со множественными пороками даже при самой тщательной обработке не сможет стать хорошим пиломатериалом. <br> <br> Именно поэтому наши специалисты используют только наиболее качественный массив дерева, который проходит распилку на  современном оборудованием ведущих немецких и итальянских производителей,  таких как:<br><br> — Станок многопильный для распиловки брусов <b>WP–500 (Германия)</b> предназначен для продольной распиловки пиломатериала, бруса, необрезной доски. <br> — Автоматический торцовочный станок <b>Cursal TRV2700EB (Италия)</b> Предназначен для автоматической вырезки дефектов. <br><br>  <a href='../Technologies'>Подробнее</a>"
            },
            {
                id: 3,
                img: img3,
                h2: "Сухие материалы ",
                text: "Влага является комфортной средой для образования грибка и размножения микроорганизмов.При сушке повышается прочность пиломатериалов и серьезно понижается риск загнивания и поражения грибком.<br><br> В нашей компании все пиломатериалы прошли процесс сушки и полностью соответствуют всем нормам. Поэтому Вы можете быть уверенны в качестве готовых материалов.<br><br> Мы используем технологию камерной сушки.  Пиломатериал камерной сушки в процессе обрабатывается специальными защитными растворами, которые повышают устойчивость древесины к гниению и грибковым поражениям."

            }
        ],
        advantages: [
            {
                id: 1,
                img: adv1,
                text: "Индивидуальные консультации"
            },
            {
                id: 2,
                img: adv2,
                text: "Короткие сроки выполнения заказа"
            },
            {
                id: 3,
                img: adv3,
                text: "Наличие сертификатов на продукцию"
            },
            {
                id: 4,
                img: adv4,
                text: "Многолетний опыт"
            },
            {
                id: 5,
                img: adv5,
                text: "Гарантия качества"
            },
            {
                id: 6,
                img: adv6,
                text: "Индивидуальный расчет стоимости"
            }
        ],
        catalog: [
            {
                id: 1,
                name: "Топливные брикеты",
                img: item1,
                text: "– отличная современная альтернатива традиционным дровам.                    Влажность на момент упаковки: 10 %                    Зольность: менее 1,5 %                    Упаковка по 10 или 20 кг                    Энергетическая ценность: 4200 – 4600 ккал/кг                    Этикетка любая                    материал — сосна                    объём поставок до 1000 т/мес.",
                price: "от 179р"
            },
            {
                id: 2,
                name: "Слоисто-клееный брус",
                img: item2,
                text: "Клееный оконный брус из сосны производится нашей компанией в соответствии с требованиями института Розенхайм (Германия). Изготовление бруса возможно по вашим параметрам, сделайте заказ и наши специалисты проконсультируют вас.",
                price: "от 1 299 р"
            },
            {
                id: 3,
                name: "Доска обрезная сухая",
                img: item3,
                text: "Согласно ГОСТу, ширина обрезной доски должна как минимум вдвое превышать ее толщину;                    Толщина пиленой доски не превышает 50 мм.                    Заказывайте сухую обрезную доску у нас, и наша компания подберет вам иделальный типоразмер и сорт, подходящий под ваши требования.",
                price: "от 399р"
            },
            {
                id: 4,
                name: "Древесина топливная",
                img: item4,
                text: "предназначенная для растопки печи или котлов.                Готова к использованию                    Мелко расщеплена                    Влажность на момент упаковки <15 %                    Энергетическая ценность: 4.2 ккал/кг                    Упаковка от 10 дм3                    Этикетка: коробка или сетка                     материал — сосна",
                price: "от 179р"
            },
            {
                id: 5,
                name: "Наличник из сосны",
                img: item5,
                text: "Наличник представляет собой узкую и длинную планку для оформления дверей и окон.                    Различают оконные и дверные наличники.                                        Заказывайте наличник из сосны у нас, и наша компания подберет вам иделальный типоразмер, подходящий под ваши требования.",
                price: "от 499р"
            },
            {
                id: 6,
                name: "Обшивка из сосны",
                img: item6,
                text: " Прочная, долговечная, эстетически красивая и доступная доска успешно применяется во внутренней и внешней отделке.                    Заказывайте обшивку из сосны у нас, и наша компания подберет вам иделальный типоразмер и сорт, подходящий под ваши требования.",
                price: "от 599р"
            },
        ],
        countries: [
            {
                id: 1,
                img: stran,
                h2: "С кем работаем ",
                text: "Однажды обратившись в нашу компанию, заказчики остаются в числе наших постоянных клиентов. Нас связывают тесные партнерские связи с застройщиками и индивидуальными предпринимателями, крупными предприятиями и небольшими компаниями,  застройщиками коттеджных поселков на территории Беларуси и соседних государств.<br><br> Основные регионы поставок: :<b> Германия, Венгрия, Россия, Литва, Чехия, Республика Беларусь.</b>"
            }
        ],
        texts: [
            {
                text: "Работая честно сегодня, мы выстраиваем успешное будущее нашей компании. Во главу угла мы ставим высочайшее качество продукции и предоставляемых нами услуг. Эффективная работа коллектива компании, уверенное воплощение в жизнь смелых проектов и планов, постоянное внедрение самых передовых технологий, расширение списка выпускаемой продукции и масштабов производства.  <br> <br><b>Наша миссия</b> заключается в том, чтобы быть экспортером качественной продукции из древесины хвойных пород, соответствующей мировым стандартам.<br><br><b>Mы производим:</b>  <br><br> <ul> <li> Топливные брикеты</li><li> Слоисто-клееный брус</li> <li> Доску обрезную сухую</li> <li> Древесину топливную</li> <li> Наличники из сосны <li> Обшивку из сосны</li></ul>  "
            },//для странички "о компании"
            {
                text: "<h2>2. Качество клея</h2><br> В нашем случае закупается наиболее зарекомендовавший себя за многие годы японский и шведский клей, для разных типов древесины. Клей отвечает за то, насколько крепким будет клееный брус, и за его эксплуатационные качества.<br> <br> <h2>3. Точность изготовления и качество оборудования</h2> <br> <b>Насколько будет точным распил?</b> Только при идеально подогнанных досках получится брус с совершенной геометрией, их которого строят дома без щелей, не требующие никакого дополнительного утепления и отделки.<br><br> <b>Насколько исправно работает сушильная камера?</b> От этого зависит геометрия всего будущего дома, сделанного из нашего бруса. Только при точных расчетах и высушенном до минимального процента влажности брусе дом не «ведет», откосы дверей и окон остаются на месте даже если переехать в первый год! Это возможно только на современном оборудовании, с которым работают знающие опытные мастера."
            },
            {
                text: "<h1>Контакты</h1><br><h2>Мы находимся в постоянном взаимодействии с заказчиками.</h2><br> Сотрудники компании оказывают консультационную поддержку нашим клиентам не только на стадии оформления заказа, но и после его выполнения. На всю продукцию фирмы распространяются гарантийные обязательства, отраженные в договорах на поставку изделий компании. <br> <br> <b>Наша компания подберет вам иделальный сорт и типоразмер продукции , подходящий под ваши требования.</b>  При доставке товара в отдаленные от завода регионы заказчик получает от сотрудников отдела логистики четкую информацию о перемещении продукции и сроках ее доставки в конечный пункт назначения.<br><br> <b>Оставьте нам заявку и наш специалист ответит Вам в ближайшее время.</b>  "
            }
        ],
        technologies: [
            {
                id: 1,
                img: tech1,
                h2: "Технологии",
                text: "Чтобы получить продукцию экспортного качества, необходимо в процессе производства учесть все мелочи. Особое место занимает технология производства. Есть три ключевых момента в производстве, влияющих на качество и результат: <br><br> <h2>1. Качество древесины: самой доски или бруса, влажность и отсутствие пороков</h2> <br>Этот фактор контролируется нами на 100% за счет собственной <b>лесозаготовительной базы</b>,собственного <b>производства полного цикла</b>, собственных <b>складов с правильными условиями хранения.</b><br>Только сочетание всех этих составляющих гарантирует качество как материала, так и будущей продукции."

            },
            {
                id: 2,
                img: img2,
                h2: "Оборудование",
                text: " Именно поэтому наши специалисты используют только наиболее качественный массив дерева, который проходит распилку на  современном оборудованием ведущих немецких и итальянских производителей,  таких как:<br><br> — Станок многопильный для распиловки брусов <b>WP–500 (Германия)</b> предназначен для продольной распиловки пиломатериала, бруса, необрезной доски. <br> — Автоматический торцовочный станок <b>Cursal TRV2700EB (Италия)</b> Предназначен для автоматической вырезки дефектов<br> — Станок постоянной циркуляции <b>OSMA S4R-P</b>– клей наносится непрерывной линией, пролитый клей снова отправляется в емкость и используется в работе.<br> — Пресс для бруса с горизонтальной загрузкой <b>GIGA15</b>."

            }
        ]

    }
