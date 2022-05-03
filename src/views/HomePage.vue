<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-searchbar animated class="cs-search-bar">
          <ion-avatar>
            <img src="https://thispersondoesnotexist.com/image" />
          </ion-avatar>
        </ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-list>
        <MessageListItem
          v-for="setting in settings"
          :key="setting.id"
          :setting="setting"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style>
.cs-search-bar input {
  border-radius: 10px !important;
}
.cs-search-bar ion-icon {
  color: #1574e8 !important;
}
</style>

<style scoped>
ion-searchbar {
  border-radius: 5px !important;
  overflow: hidden;
}
ion-searchbar ion-avatar {
  position: absolute;
  right: 16px;
  z-index: 10;
  height: 70%;
  width: auto;
}
</style>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonAvatar,
  IonToolbar,
} from "@ionic/vue";
import MessageListItem from "@/components/MessageListItem.vue";
import { defineComponent } from "vue";
import { getSettings } from "@/data/settings";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      settings: getSettings(),
    };
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonToolbar,
    MessageListItem,
    IonAvatar,
  },
});
</script>
