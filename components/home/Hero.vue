<template>
  <header class="pointer-events-none relative h-[90vh] w-full overflow-hidden">
    <div
      class="absolute z-20 flex h-full w-full flex-col text-white sm:items-center sm:justify-center sm:text-center">
      <h1 class="text-4xl" style="font-family: 'Karla'">
        Bienvenue à mon cabinet de Reiki
      </h1>
      <h3 class="mt-4 text-2xl">Prenez du temps pour vous</h3>
      <h3 class="mt-2 text-2xl">harmonisez et équilibrez vos énergies</h3>
      <h3 class="mt-2 text-2xl">allez vers le meilleur de qui vous êtes.</h3>
      <p>Pour vous et votre enfant,</p>
      <UiMyButton> Découvrez mes services </UiMyButton>
      <div class="flex">
        <UiMyButton class="flex items-center bg-secondary-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-1 h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd" />
          </svg>
          Contact
        </UiMyButton>
        <UiMyButton class="flex items-center bg-primary-500">
          <div class="flex items-end">
            <svg
              class="mr-1 h-6"
              viewBox="0 0 67 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M48.3767 55.8256C55.1608 57.5821 60.6058 60.4874 63.8238 64.0677C67.0419 67.648 67.8432 71.6923 66.0971 75.541C64.3509 79.3898 60.1604 82.816 54.2088 85.2611C48.2571 87.7062 40.8953 89.0259 33.3237 89.0051C25.7522 88.9843 18.4174 87.6242 12.5153 85.1465C6.6132 82.6688 2.49194 79.2198 0.823462 75.3616C-0.845021 71.5035 0.0376881 67.4639 3.32767 63.9014C6.61765 60.339 12.1208 57.4638 18.94 55.7447L20.5562 57.4941C14.494 59.0224 9.60162 61.5784 6.67683 64.7455C3.75204 67.9125 2.96731 71.5037 4.45059 74.9336C5.93387 78.3635 9.59766 81.4297 14.8446 83.6323C20.0916 85.835 26.6122 87.0441 33.3433 87.0626C40.0744 87.0811 46.6191 85.9079 51.9101 83.7342C57.2011 81.5605 60.9265 78.5146 62.4787 75.0931C64.031 71.6715 63.3187 68.0762 60.4578 64.8933C57.597 61.7104 52.7564 59.1276 46.7253 57.5661L48.3767 55.8256Z"
                class="fill-secondary-700" />
              <path
                d="M33.5 73L52.5 45.5047C68 20.5052 50.5001 -4.14252e-06 33.5 0.500172C16.4999 -4.14252e-06 -1.00006 20.5052 14.5 45.5047L33.5 73Z"
                class="fill-secondary-700" />
              <path
                d="M33.5 34C38.7308 34 42 30.7308 42 25.5C42 20.2692 38.7308 17 33.5 17C28.2692 17 25 21.5769 25 25.5C25 29.4231 28.2692 34 33.5 34Z"
                class="fill-primary-500" />
            </svg>
            Me trouver
          </div>
        </UiMyButton>
      </div>
    </div>
    <img
      class="absolute -top-64 z-10 brightness-50"
      src="/lanterne Reiki.png"
      alt="" />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
