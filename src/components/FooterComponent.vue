<template>
    <div class="foot">
        <div class="container">
            <div class="name">
                <span> &copy; venere - 2023</span>
            </div>
            <div class="socials">
                <ul>
                    <li><a href=""><i class="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-google-plus"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-pinterest"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-cc-paypal"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/main.scss' as *;

.foot{
    height: 100px;
    background-color: $dark;
    .container{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
            display: flex;
            align-items: center;
            height: 100%;
            color: $grey;
            text-transform: uppercase;
        }
        .socials{
            display: flex;
            align-items: center;
            height: 100%;
            color: $grey;
            text-transform: uppercase;
            ul{
                margin: 0;
                padding: 0;
                display: flex;
                gap: 15px;
                li{
                    list-style: none;
                    a{
                        color: $grey;
                        font-size: 26px;
                        transition: all 250ms ;
                        &:hover{
                            color: $white;
                        }
                    }
                }
            }
        }
    }
}


</style>