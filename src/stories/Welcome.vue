<template>
  <div class="welcome">
    <h1 class="welcome__title">dossierdata-component-library</h1>
    <p class="welcome__paragraph">A Vue component library built by Homeday's frontend team.</p>

    <h3 class="welcome__subtitle">Start using the library in 2 steps</h3>
    <p class="welcome__paragraph">
      1- Install the library:
      <vue-code-highlight class="welcome__code">{{
        "npm install dossierdata-component-library --save"
      }}</vue-code-highlight>
      2- Consume the components
      <vue-code-highlight class="welcome__code">{{
        "import { DDButton } from 'dossierdata-component-library';"
      }}</vue-code-highlight>
    </p>

    <h3 class="welcome__subtitle">Start local development in 3 steps</h3>
    <p class="welcome__paragraph">
      1- Clone the repository in your workspace:
      <vue-code-highlight class="welcome__code">{{
        "cd ~/workspace\n" +
        "git clone git@github.com:dossierdata/component.library.git"
      }}</vue-code-highlight>
      2- Install dependencies and provide as a link via npm:
      <vue-code-highlight class="welcome__code">{{
          "cd ~/workspace/component.library\n" +
          "npm install\n" +
          "npm link"
        }}</vue-code-highlight>
      3- Use the link in your project:
      <vue-code-highlight class="welcome__code">{{
          "cd ~/workspace/my.project\n" +
          "npm link component library"
        }}</vue-code-highlight>
    </p>

    <h3 class="welcome__subtitle">How to use our storybook?</h3>
    <h4>You don't have to check all the tabs to see if something is available. We use some suffixes in the story's title:</h4>
    <p class="welcome__paragraph">
      <ul class="text-small margin-top-s margin-left-m">
        <li>🎛 : Check the knobs tab to play around with the component's props</li>
        <li>📝 : Check the notes tab for more information about the component, how to use it or code snippets</li>
      </ul>
    </p>
    <h3 class="welcome__subtitle">Contributing :)</h3>
    <p class="welcome__paragraph">
      Check out our <a class="link" href="https://github.com/dossierdata/component.library" target="_blank">Github repository</a> for more details.</p>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
  name: 'Welcome',
  components: {
    VueCodeHighlight,
  },
};
</script>

<style lang="scss" scoped>
@import '~dossierdata-component-library/src/styles/mixins.scss';
@import "~vue-code-highlight/themes/prism.css";

.welcome {
  padding-top: $stack-m;
  padding-bottom: $stack-l;

  &__title {
    display: inline-block;
    position: relative;
    font-size: 72px;
    line-height: 80px;
    font-weight: 900;
    color: $primary-color;
    margin-top: $stack-m;
    margin-bottom: $stack-m;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% + 3px);
      height: 40%;
      background: getShade($secondary-color, 80);
      z-index: -1;
    }
  }

  &__subtitle {
    @include font('title');
    margin-top: $stack-l;
  }

  &__paragraph {
    margin-top: $stack-m;
  }

  &__code {
    font-size: 14px;

    ::v-deep pre {
      background-color: $secondary-bg;
    }
  }
}
</style>
