import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HomePageVue from "../HomePage.vue";

describe("HomePage", () => {
  it("renders properly", () => {
    const wrapper = mount(HomePageVue);

    const homePage = wrapper.get(".HomePage");

    // should exist
    expect(homePage).toBeTruthy();

    // should render about section
    expect(homePage.find("main.about").exists()).toBe(true);

    // should render name
    expect(homePage.text()).toContain("Kwesi Frempong-Smart");

    // should generate a quote
    console.log(homePage.get(".quotes").text());
    expect(homePage.get(".quotes").text()).toBeTruthy();
  });
});
