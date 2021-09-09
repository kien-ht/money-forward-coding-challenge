import { shallowMount, mount } from "@vue/test-utils";
import UserAccountListPage from "@/views/pages/UserAccountListPage.vue";

describe("UserAccountListPage.vue", () => {
  it("snapshot", () => {
    const wrapper = mount(UserAccountListPage, {
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(UserAccountListPage, {
      data: () => ({ currentUserName: "test user name" }),
    });
  });

  it("renders user name", () => {
    const userName = wrapper.find("h1").text();
    expect(userName).toBe("test user name");
  });
});
