import { shallowMount, mount } from "@vue/test-utils";
import NotificationModal from "@/components/NotificationModal.vue";

describe("NotificationModal.vue", () => {
  it("snapshot", () => {
    const wrapper = mount(NotificationModal, {});
    expect(wrapper).toMatchSnapshot();
  });

  it("renders notification content", () => {
    const content = {
      title: "test title",
      body: "test body",
    };
    const wrapper = shallowMount(NotificationModal, {
      data: () => ({ content }),
    });
    const modalTitle = wrapper.findComponent({ name: "b-modal" }).props().title;
    const modalBody = wrapper.find("p").text();
    expect(modalTitle).toBe(content.title);
    expect(modalBody).toBe(content.body);
  });
});
