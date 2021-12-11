# Ann Abrajeeva

## Contacts

__Phone number:__ +998 (91) 536-12-96  
__E-mail:__ anuta040786@yandex.ru  
__Discord:__ AnnaAbrajeeva#2376 (@AnnAbrajeeva)  

## Professional summary
I'm junior Front-end Developer in web studio. Mostly I create Wordpress websites and a little with VueJS.  

I want to improve my skills and continue to evolve in this area.

## Skills

* HTML, CSS, JS
* Wordpress
* VueJS

## Code example

```javascript
computed: {
    ...mapGetters("cart", ["getCart"]),
    getTotalPrice() {
      if (this.getCart.length) {
        let result = [];
        this.getCart.map((product) => {
          result.push(product.quantity * product.cost);
        });
        result = result.reduce((sum, el) => sum + el);
        return result;
      } else {
        return 0
      }
    },
  },
  methods: {
    changeQuantity(value, id) {
      this.$store.dispatch("cart/changeQuantityInCart", {
        value: value,
        id: id,
      });
    },
    delFromCart(id) {
      this.$store.dispatch("cart/deleteProductFromCart", id);
    },
  } 
  ```
  
   ## Education
| ***Year***  | ***Education*** |
| ------------- | ------------- |
| October 2020 - March 2021  | ___IT-School "Wepro", Front-end developer___  |
| 2005-2009  | ___National University of Uzbekistan, sociology___  |

 

  ## English

  A2 - Pre-intermediate

