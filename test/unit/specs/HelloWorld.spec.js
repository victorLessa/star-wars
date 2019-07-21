import { mount } from "@vue/test-utils";
import Home from "@/App";

describe("Home.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Home);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
