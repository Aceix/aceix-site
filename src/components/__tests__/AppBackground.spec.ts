import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AppBackgroundVue from "../AppBackground.vue";

describe("AppBackground", () => {
  it("renders properly", () => {
    const wrapper = mount(AppBackgroundVue);

    const appBg = wrapper.get(".AppBackground");

    // bg should exist
    expect(appBg).toBeTruthy();

    // should be on screen
    expect(appBg.isVisible()).toEqual(true);

    // bg should render img
    const bgimg = appBg?.find("img.background");
    expect(bgimg).toBeTruthy();
    expect((bgimg?.element as HTMLImageElement)?.src).toBeTruthy();
    expect(bgimg.isVisible()).toEqual(true);
  });
});
