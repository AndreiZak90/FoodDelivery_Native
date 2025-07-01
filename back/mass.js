import burger1 from "../images/image/burger/burger1.png";
import burger2 from "../images/image/burger/burger2.png";
import burger3 from "../images/image/burger/burger3.png";
import burger4 from "../images/image/burger/burger4.png";
import burger5 from "../images/image/burger/burger5.png";
import burger6 from "../images/image/burger/burger6.png";
import hd1 from "../images/image/hot_dog/hd1.png";
import hd2 from "../images/image/hot_dog/hd2.png";
import hd3 from "../images/image/hot_dog/hd3.png";
import snack1 from "../images/image/snacks/snack1.png";
import snack2 from "../images/image/snacks/snack2.png";
import snack3 from "../images/image/snacks/snack3.png";

const mass = [
  {
    Бургеры: [
      {
        name: "Мясная бомба",
        quantity: 1,
        img: burger1,
        price: 689,
        weight: 520,
        calories: 430,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Пшеничная булочка",
          "Котлета из говядины",
          "Красный лук",
          "Листья салата",
          "Соус горчичный",
        ],
      },
      {
        name: "Супер сырный",
        quantity: 1,
        img: burger2,
        price: 550,
        weight: 512,
        calories: 330,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Красный лук",
          "Пшеничная булочка",
          "Листья салата",
          "много сыра",
          "Котлета из говядины",
          "Соус горчичный",
        ],
      },
      {
        name: "Сытный",
        quantity: 1,
        img: burger3,
        price: 639,
        weight: 580,
        calories: 630,
        description:
          "Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Котлета из говядины",
          "Соус горчичный",
          "сыр",
          "Красный лук",
          "Листья салата",
          "Пшеничная булочка",
        ],
      },
      {
        name: "Тяжелый удар",
        quantity: 1,
        img: burger4,
        price: 480,
        weight: 470,
        calories: 530,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Пшеничная булочка",
          "Котлета из говядины",
          "Котлета из говядины ещё одна",
          "Красный лук",
          "Листья салата",
          "Соус горчичный",
        ],
      },
      {
        name: "Вечная классика",
        quantity: 1,
        img: burger5,
        price: 450,
        weight: 450,
        calories: 510,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Соус горчичный",
          "Пшеничная булочка",
          "Котлета из говядины",
          "Листья салата",
          "Красный лук",
        ],
      },
      {
        name: "Итальянский",
        quantity: 1,
        img: burger6,
        price: 560,
        weight: 510,
        calories: 490,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Пшеничная булочка",
          "Котлета из говядины",
          "Кунжут",
          "Соус",
          "Красный лук",
          "Листья салата",
          "Соус горчичный отсутствует",
        ],
      },
    ],
  },
  {
    "Хот-доги": [
      {
        name: "Домашний хот-дог",
        quantity: 1,
        img: hd1,
        price: 290,
        weight: 250,
        calories: 430,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Пшеничная булочка",
          "Сосиска из говядины",
          "Красный лук",
          "Листья салата",
          "Соус горчичный",
        ],
      },
      {
        name: "Жгучий хот-дог",
        quantity: 1,
        img: hd2,
        price: 239,
        weight: 245,
        calories: 330,
        description:
          "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: [
          "Пшеничная булочка",
          "Сосиска из свинины",
          "Красный лук",
          "Листья салата",
          "Соус острый",
        ],
      },
      {
        name: "Классический хот-дог",
        quantity: 1,
        img: hd3,
        price: 220,
        weight: 215,
        calories: 310,
        description: "Вкусный хот-дог.",
        composition: [
          "Пшеничная булочка",
          "Котлета из говядины",
          "Красный лук",
          "Листья салата",
          "Соус горчичный",
        ],
      },
    ],
  },
  { Вок: [] },
  {
    Закуски: [
      {
        name: "Начос",
        quantity: 1,
        img: snack1,
        price: 250,
        weight: 220,
        calories: 130,
        description: "просто начос с соусом",
        composition: ["чипсы", "Соус горчичный"],
      },
      {
        name: "Картошка фри",
        quantity: 1,
        img: snack2,
        price: 245,
        weight: 180,
        calories: 200,
        description: "нежная картошка Фри",
        composition: ["Картошка"],
      },
      {
        name: "Луковые кольца",
        quantity: 1,
        img: snack3,
        price: 230,
        weight: 160,
        calories: 230,
        description: "Нежные луковые кольца",
        composition: ["лук", "приправа"],
      },
    ],
  },
  { Комбо: [] },
  { Шаурма: [] },
  { Десерты: [] },
  { Пицца: [] },
  { Соусы: [] },
];

export default mass;
