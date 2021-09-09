import { shallowMount, mount } from "@vue/test-utils";
import UserSearchPage from "@/views/pages/UserSearchPage.vue";

describe("UserSearchPage.vue", () => {
  it("snapshot", () => {
    const wrapper = mount(UserSearchPage, {
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper).toMatchSnapshot()
  })

  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(UserSearchPage, {})
  })

  it("renders search input", () => {
    const input = wrapper.findComponent({ name: 'b-form-input' })
    expect(input.exists()).toBe(true)
  });

  it("renders search input placeholder", () => {
    expect(wrapper.findComponent({ name: 'b-form-input' }).props().placeholder).toBe('Type user_id to search')
  });

  it("renders search button", () => {
    expect(wrapper.findComponent({ name: 'b-button' }).text()).toBe("Search")
  });

});
