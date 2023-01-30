<template>
  <div class="navbr">
    <div class="navcontent">
      <div class="container">
        <ul class="container">
          <li>
            <router-link :to="{ name: 'rossetti-category' }" active-class="active1"><span>rossetti</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'eyeshadow-category' }" active-class="active1"><span>ombretti</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'bronzer-category' }" active-class="active1"><span>bronzer</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'blush-category' }" active-class="active1"><span>blush</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'mascara-category' }" active-class="active1"><span>mascara</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'fundation-category' }" active-class="active1"><span>fondotinta</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'other' }" active-class="active1"><span>prodotti</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
          <li><router-link :to="{ name: 'contactus' }" active-class="active1"><span>contatti</span></router-link>
            <div class="knob"></div>
            <div class="corner-right"></div>
            <div class="corner-left"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.navbr {
  position: sticky;
  background-color: $mainColor;
  top: 80px;
  width: 100%;
  height: 80px;
  .navcontent {
    height: 70px;
    // box-shadow: 0px 4px 4px $shadow;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-width: 1170px;

      ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        li {
          list-style: none;
          position: relative;
          width: 100%;
          margin: 0 5px;

          $gold: goldenrod;
          $silver: rgb(152, 152, 152);
          $black: black;

          &:has(.active1){
            $depth: 8px;
            
            transform: translate(0,0);
            clip-path: polygon(0% $depth, $depth 0%, 100% 0%, 100% calc(100% - $depth), calc(100% - $depth) 100%, 0% 100%);
          }

          .corner-right{
            position: absolute;
            top: 7px;
            right: 10px;
            height: 7px;
            width: 5px;
            border-bottom-left-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom: 1px solid $silver;
            border-left: 1px solid $silver;
            border-top: 1px solid $silver;
          }

          .corner-left{
            position: absolute;
            top: 7px;
            left: 10px;
            height: 7px;
            width: 5px;
            border-bottom-right-radius: 50%;
            border-top-right-radius: 50%;
            border-bottom: 1px solid $silver;
            border-right: 1px solid $silver;
            border-top: 1px solid $silver;
          }

          .knob{
            position: absolute;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: black;
            left: 50%;
            top: 5px;
            transform: translate(-50%, 0);
            // background: radial-gradient(circle at 65% 15%, rgba(255, 255, 255, 0.65) 1px, rgb(174, 177, 177) 3%, rgb(2, 2, 28) 60%, rgb(3, 31, 31) 100%);
            background: radial-gradient(circle at 65% 15%, rgba(255, 255, 255, 0.65) 1px, rgb(174, 177, 177) 3%, $silver 60%, rgb(0, 2, 2) 100%);

            &::before{
              content: '';
              display: block;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(-52.5px, -50%);
              height: 1px;
              background-color: $silver;
              width: 48px;
            }

            &::after{
              content: '';
              display: block;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translate(52.5px, -50%);
              height: 1px;
              background-color: $silver;
              width: 48px;
            }
          }

          $col: #972111;
          $borLen: .1em;
          $depth: 6px;
          $modif: calc($borLen + $depth);

          border: solid #0000;
          margin-top: calc($depth / 2);
          border-width: $borLen $borLen $modif $modif;
          background: conic-gradient(at left $depth  bottom $depth, #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box, conic-gradient(at left $modif bottom $modif, #0000 90deg,rgb(46, 42, 41) 0) 0 100%/calc(100% - $borLen) calc(100% - $borLen)  border-box;
          transform: translate(calc($depth / -1),$depth);
          clip-path: polygon($depth 0%, $depth 0%, 100% 0%, 100% calc(100% - $depth), 100% calc(100% - $depth), $depth calc(100% - $depth));
          transition: 0.5s;
          &:hover{
            transform: translate(0,0);
            clip-path: polygon(0% $depth, $depth 0%, 100% 0%, 100% calc(100% - $depth), calc(100% - $depth) 100%, 0% 100%);
          }
          &:hover .dropdownn {
            display: block;
          }
          a {
            display: block;
            text-transform: uppercase;
            text-align: center;
            color: $grey;
            padding: 13px 22px;
            text-decoration: none;
            background-color: $mainColor;
            transition: 200ms ease-in-out;

            span{
              display: block;
              transform: translate(0, 5px);
            }
            &:hover {
              color: $white;
              text-shadow: 0px 0px 4px $white;
              // background-color: $mainColorActive;
            }
          }
          .dropdownn {
            background-color: $mainColorActive;
            position: absolute;
            width: 100%;
            margin: 0;
            padding: 0;
            flex-direction: column;
            align-items: center;
            box-shadow: 0px 4px 4px $shadow;
            transition: all 250ms;
            display: none;
            z-index: 1;
            a {
              display: block;
              background-color: $mainColorActive;
              width: 100%;
              &:hover {
                filter: brightness(1.1);
              }
            }
          }
        }
      }
    }
  }
}

.active1{
  // background-color: $mainColorActive !important;
  color: $white !important;
  text-shadow: 0px 0px 4px $white !important;
  transition: 200ms ease-in-out;
  // $col: #972111;
  // $borLen: .1em;
  // $depth: 20px;
  // $modif: calc($borLen + $depth);
  // transform: translate(0,0);
  // clip-path: polygon(0% $depth, $depth 0%, 100% 0%, 100% calc(100% - $depth), calc(100% - $depth) 100%, 0% 100%);
}
</style>
