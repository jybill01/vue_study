<template>
  <div>
    <b-card-group>
      <b-card no-body style="height: 50rem; max-width: 130rem;">
        <b-tabs pills card id="bar">
          <b-tab title="순례길 소식" active>
            <b-card-text>소식</b-card-text>
          </b-tab>
          <b-tab title="행사">
            <b-card-text>행사</b-card-text>
          </b-tab>
          <b-tab title="기타">
            <b-card-text>기타</b-card-text>
          </b-tab>
          <b-tab title="등등">
            <b-card-text>등등</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>

      <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-height: 50rem; height: 50rem; max-width: 70rem; width: 70rem"
          class="mb-2"
      >
        <b-card-text style="font-size: 15px">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "HomeNotice"
}
</script>

<style scoped>



#bar{
  font-size: 15px;
}

</style>