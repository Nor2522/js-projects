# 🍎 Calorie Counter - Precision Nutrition Tracker

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Barnaamijkan waa xisaabiyaha tamarta (Calories) aan ku  talagalay inuu dadka ka caawiyo la socodka miisaankooda. Wuxuu si firfircoon u maareeyaa cuntooyinka la cuno iyo jimicsiga la sameeyo isagoo adeegsanaya **Vanilla JavaScript**.

---

## 🔥 Tilmaamaha Muhiimka ah (Key Features)

* **Dynamic Entry Management**: Waxaad si aan xad lahayn ugu dari kartaa safaf cusub (Entries) adiga oo isticmaalaya `insertAdjacentHTML`.
* **Data Sanitization (Regex)**: Barnaamijku wuxuu si otomaatig ah u sifeeyaa xogta isagoo isticmaalaya `/[+-\s]/g` si uu u tirtiro calaamadaha khalkhal gelinaya xisaabta.
* **Scientific Notation Guard**: Wuxuu aqoonsadaa oo diidaa nambarada sayniska ah (sida `1e3`) isagoo isticmaalaya Regex-ka `/\d+e\d+/i` si looga fogaado khaladaadka xisaabta.
* **Real-time Analysis**: Wuxuu isla markaaba kuu sheegayaa haddii aad ku jirto surplus (cunto badashay) ama deficit (cunto yaraatay).

---

## 🧮 Sida ay Xisaabtu u Shaqayso

Barnaamijku wuxuu isticmaalaa formula-dan si uu u helo natiijada rasmiga ah:

$$Remaining = Budget - Consumed + Exercise$$

Barnaamijku wuxuu u kala saaraa natiijada labo nooc:
1. **Surplus**: Haddii kalori-ga kuu haray uu ka yar yahay 0.
2. **Deficit**: Haddii aad weli haysato kalori aad cuni karto.

---

## 🛠️ Farsamooyinka la Adeegsaday (Technical Stack)

| Qaybta | Sharaxaad |
| :--- | :--- |
| **DOM Manipulation** | Adeegsiga `querySelectorAll` iyo `getElementById` si loo maareeyo HTML-ka. |
| **Regex Validation** | Nadiifinta xogta iyo xaqiijinta nambarada saxda ah. |
| **Event Handling** | Maareynta dhacdooyinka `submit` ee foomka iyo gujinta badhamada. |

---

## 🚀 Sida loo Isticmaalo

1. **Budget**: Geli cadadka tamarta aad hiigsanayso maalintii.
2. **Add Entries**: Dooro qaybta (Breakfast, Lunch, iwm.) oo riix **Add Entry** si aad u geliso xogta.
3. **Calculate**: Markaad dhamaystirto, riix **Calculate Remaining Calories** si aad u aragto natiijada.

---

## 💻 Sida loo soo dejiyo (Local Setup)

Maadaama mashruucani uu qayb ka yahay ururinta **js-projects**, raac tillaabooyinkan:

1. Soo deji dhammaan mashaariicda:
   ```bash
   git clone [https://github.com/Nor2522/js-projects.git](https://github.com/Nor2522/js-projects.git)
   ls
   cd js-projects/P4-form-validaton