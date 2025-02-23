import vue3GoogleLogin from "vue3-google-login";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { googleClientId: NUXT_PUBLIC_GOOGLE_CLIENT_ID } = runtimeConfig.public;

  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId: NUXT_PUBLIC_GOOGLE_CLIENT_ID,
  });
});
