<template>
  <ion-item v-if="setting" :detail="false" class="list-item" lines="none">
    <div
      class="cs-icon-container"
      slot="start"
      :style="{ backgroundColor: setting.color }"
    >
      <ion-icon :icon="Icons[setting.icon]"></ion-icon>
    </div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ setting.title }}
      </h2>
      <p>
        {{ setting.subtitle }}
      </p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
import { defineComponent } from "vue";
import * as Icons from "ionicons/icons";

export default defineComponent({
  name: "MessageListItem",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
  },
  props: {
    setting: Object,
  },
  computed: {
    iconStyle(color = "grey") {
      return `background-color: ${color}`;
    },
    icon() {
      return require("ionicons/icons");
    },
  },
  data() {
    return { Icons };
  },
});
</script>

<style>
ion-icon {
  color: white !important;
  font-size: 25px;
}
</style>
<style scoped>
.cs-icon-container {
  margin-left: 30px;
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>
