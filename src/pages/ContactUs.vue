<template>
  <section class="customh">
    <div class="row align-items-stretch justify-content-center g-0">
      <div class="col-md-7">
        <div class="form h-100 contact-wrap p-5">

          <div v-if="success == true" class="alert alert-success" role="alert">
            Messaggio inviato con successo
          </div>

          <div v-if="success == false" class="alert alert-danger" role="alert">
            Errore messaggio non inviato!
          </div>

          <h3 class="text-center titl">Contattaci per qualsiasi informazione..</h3>
          <!-- <div v-if="success" class="alert alert-success text-start" role="alert">
                      Messaggio inviato con successo!
                  </div> -->
          <form class=" frm" ref="form" @submit.prevent="sendEmail">
            <div class="row">
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">Nome *</label>
                <input class="border-0 border-bottom form-control" type="text" name="name" id="name" placeholder="Nome"
                  required>
                <!-- <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
                                  {{ error }}
                              </p> -->
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">Email *</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="La tua Email" required>
                <!-- <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">
                                  {{ error }}
                              </p> -->
              </div>
            </div>


            <div class="row mb-5">
              <div class="col-md-12 form-group mb-3">
                <label for="message" class="col-form-label">Messaggio *</label>
                <textarea class="form-control textare" name="message" id="message" cols="30" rows="10"
                  placeholder="Scrivi il tuo Messaggio" required></textarea>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-5 form-group text-center">
                <input class="sbmt mine" type="submit" value="Invia" />
              </div>
            </div>
          </form>

          <div id="form-message-warning mt-4"></div>
          <div id="form-message-success">
            Your message was sent, thank you!
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: 'ContactUs',
  data() {
    return {
      success: null,
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_xs5p0sg",
          "template_4o69yqe",
          this.$refs.form,
          "Ucx5jimnfr2CXu0Fc"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.success = true;
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
            this.success = false;
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
          }
        );
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: #efefef;
  line-height: 1.9;
  color: #8c8c8c;
  position: relative;
}

.textare {
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Roboto", sans-serif;
  color: #000;
}


a,
a:hover {
  text-decoration: none !important;
}

.text-black {
  color: #000;
}




.form-control {
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
  background: none;
}

.form-control:active,
.form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #000;
}

.col-form-label {
  color: #000;
  font-size: 13px;
}

.btn,
.form-control,
.custom-select {
  border-radius: 0;
}

.custom-select {
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
}

.custom-select:active,
.custom-select:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #000;
}

.btn {
  border: none;
  border-radius: 0;
  font-size: 11px;
  letter-spacing: .2rem;
  text-transform: uppercase;
  border-radius: 30px !important;
}

.btn.btn-primary {
  border-radius: 30px;
  background: #4d80e4;
  color: #fff;
  -webkit-box-shadow: 0 15px 30px 0 rgba(77, 128, 228, 0.2);
  box-shadow: 0 15px 30px 0 rgba(77, 128, 228, 0.2);
}

.btn:hover {
  color: #fff;
}

.btn:active,
.btn:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.contact-wrap {
  -webkit-box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
}

.contact-wrap .col-form-label {
  font-size: 14px;
  color: #b3b3b3;
  margin: 0 0 10px 0;
  display: inline-block;
  padding: 0;
}

.contact-wrap .form,
.contact-wrap .contact-info {
  padding: 40px;
}

.contact-wrap .contact-info {
  color: rgba(255, 255, 255, 0.5);
}

.contact-wrap .contact-info ul li {
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.5);
}

.contact-wrap .contact-info ul li .wrap-icon {
  font-size: 20px;
  color: #fff;
  margin-top: 5px;
}

.contact-wrap .form {
  background: #fff;
}

.contact-wrap .form h3 {
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.contact-wrap .contact-info {
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.contact-wrap .contact-info a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (max-width: 1199.98px) {
  .contact-wrap .contact-info {
    height: 400px !important;
  }
}

.contact-wrap .contact-info h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 30px;
}

label.error {
  font-size: 12px;
  color: red;
}

#message {
  resize: vertical;
}

#form-message-warning,
#form-message-success {
  display: none;
}

#form-message-warning {
  color: #B90B0B;
}

#form-message-success {
  color: #55A44E;
  font-size: 18px;
  font-weight: bold;
}

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-weight: bold;
  font-size: 12px;
  color: #000;
}

.titl {
  margin-bottom: 80px;
}

.mine {
  background-color: rgb(249, 216, 222);
  border-color: rgb(249, 192, 202);
  padding: 8px 30px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0px 1px 4px grey;
  font-size: 20px;
}
</style>