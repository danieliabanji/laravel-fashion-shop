<template>
  <div class="wrapper">
    <div class="box d-flex flex-column align-items-center pt-5">
      <!-- form predisposto per eventuale funzione register -->
      <!-- <form action=""> -->
      <div class="form-logo mb-4">
        <img src="/img/logo1.svg" alt="Logo shop" />
      </div>
      <div class="py-2">
        <input type="text" placeholder="Username" class="input-field" />
      </div>
      <div class="py-3">
        <input type="text" placeholder="Password" class="input-field" />
      </div>
      <div class="py-2">
        <input type="text" placeholder="Email" class="input-field" />
      </div>

      <div>
        <div class="pt-3 d-flex justify-content-start align-items-center">
          <div>
            <input type="checkbox" name="policy" id="policy" />
          </div>
          <div class="ms-2 txt-small">Dichiaro di aver letto le policy</div>
        </div>

        <div class="pt-2 d-flex justify-content-start align-items-center">
          <div>
            <input type="checkbox" name="newsletter" id="newsletter" />
          </div>
          <div class="ms-2 txt-small">Voglio iscrivermi alla newsletter</div>
        </div>
      </div>

      <div class="d-flex flex-column align-items-center pt-4">
        <button class="btn-submit" type="submit">Registrati</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.wrapper {
  background: rgb(250, 235, 238);
  background: radial-gradient(
    circle,
    rgba(250, 235, 238, 1) 31%,
    rgba(249, 216, 222, 1) 100%
  );
  padding: 13vh 0;
}

.box {
  height: 540px;
  background-color: $white;
  width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 3px 4px grey;
}

.form-logo {
  width: 25%;

  img {
    max-width: 100%;
  }
}

input {
  width: 260px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid grey;
}

.input-field::placeholder {
  padding-left: 14px;
}

#policy,
#newsletter {
  width: 14px;
  height: 14px;
}

.txt-small {
  font-size: 0.9rem;
}

.txt-xsmall {
  font-size: 0.8rem;
}
.btn-submit {
  background-color: rgb(249, 216, 222);
  border-color: rgb(249, 192, 202);
  padding: 6px 14px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0px 1px 4px grey;

  &:hover {
    opacity: 0.9;
  }
}
</style>
