<script setup lang="ts">
import { computed } from "vue";
import type { Quote } from "../models";

const quotes: Quote[] = [
  {
    msg: "That's for all the kids out there who dream the impossible. You can can do it too man! I believe in you guys!",
    author: "Lewis Hamilton",
  },
  {
    msg: "The quieter you become, the more you are able to hear",
    author: "Rumi",
  },
];

const randomQuote = computed(
  () => quotes[Math.floor(Math.random() * quotes.length)]
);
</script>

<template>
  <div class="HomePage">
    <main class="about">
      <img src="@/assets/aceix.jpg" alt="aceix" class="profile-pic" />
      <p class="name">Kwesi Frempong-Smart</p>
      <p class="title">Engineer | Designer</p>

      <p class="summary">
        I am an amicable extraordinary engineer, designer, philosopher,
        adventurer and music lover
      </p>

      <p class="connect">Connect with me</p>
      <div class="social-btns">
        <a
          title="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/kwesi-frempong-smart-26b7b2127/"
          class="social-btn"
          ><img src="@/assets/linkedin-blue.svg" alt="linkedin profile"
        /></a>
        <a
          title="Github"
          target="_blank"
          href="https://github.com/Aceix"
          class="social-btn"
          ><img src="@/assets/github.svg" alt="github profile"
        /></a>
        <a
          title="Email"
          target="_blank"
          href="mailto:aceixsmartx@gmail.com?subject=Hello%20from%20portfolio%20site"
          class="social-btn"
          ><img src="@/assets/email.svg" alt="email"
        /></a>
      </div>

      <blockquote class="quotes">
        {{ randomQuote.msg }}
        <cite>{{ randomQuote.author }}</cite>
      </blockquote>
    </main>

    <!-- <aside class="projects-pane">
      <h4>Projects</h4>
      <div class="projects"></div>
    </aside> -->
  </div>
</template>

<style scoped lang="scss">
.HomePage {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-flow: column nowrap;
}

.about {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;

  .profile-pic {
    width: 200px;
    border-radius: 8px;
    box-shadow: 2px 2px 16px black;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .title {
    margin-top: 0px;
    margin-bottom: 4px;
    font-style: italic;
  }

  .connect {
    margin-top: auto;
    margin-bottom: 4px;
  }

  .social-btns {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    margin-bottom: 2rem;

    .social-btn {
      &:any-link {
        color: inherit;
        text-decoration: none;
      }

      & > img {
        padding: 4px;
        transition: border-width 200ms;
        border: 2px solid white;
        border-radius: 50%;
        width: 40px;
        height: 40px;

        &:hover,
        &:active {
          border-width: 4px;
        }
      }
    }
  }

  .quotes {
    margin: 0px;
    width: 80vw;

    & > cite {
      display: block;
      text-align: right;

      &::before {
        content: "~";
      }
    }
  }

  .projects-pane {
    .projects {
      display: flex;
      list-style: none;
    }
  }
}

// Tablet screens
@media screen and (min-width: 768px) {
  .HomePage {
    flex-flow: row nowrap;
    font-size: large;
  }

  .about {
    align-self: flex-end;
    justify-content: flex-end;

    .profile-pic {
      width: 400px;
    }

    .connect {
      margin-top: 4rem;
    }
  }
}
</style>
