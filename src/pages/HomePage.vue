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
        That&apos;s for all the kids out there who dream the impossible. You can
        do it too man! I believe in you guys!
        <cite>Lewis Hamilton</cite>
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
}

.about {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;

  .profile-pic {
    width: 200px;
    // height: 400px;
    border-radius: 8px;
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

  .summary {
    // margin-top: 0px;
    // margin-bottom: 4px;
  }

  .connect {
    // margin-top: 4rem;
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
    // position: absolute;
    // position: relative;
    // left: 0px;
    // bottom: 1rem;

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
</style>
