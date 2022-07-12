import SettingDivisionValue from "@/components/Molecule/SettingDivisionValue/SettingDivisionValue";
import {shallowMount} from "@vue/test-utils";
import {VTextField} from "vuetify/lib/components";

describe('settingDivisionValue.vue', () => {
  it("settingDivisionValueComponent 가 정상적으로 마운트 되는가", () => {
    const wrapper = shallowMount(SettingDivisionValue);
    expect(wrapper.exists()).toBeTruthy();
  })
  it("구분값을 변경하면 각각의 메시지 건수가 구분값에 맞는 값이 등록된다.", async () => {

    const wrapper = shallowMount(SettingDivisionValue);
    await wrapper.setProps({
      settings: [
        {
          division: "학생", message: {
            PUSH: 1000,
            SMS: 1000,
            LMS: 1000,
            MMS: 1000
          }
        }
      ]
    })
    const inputs = wrapper.findAllComponents(VTextField);
    expect(inputs.at(0).text() ).toBe("1000건");
  })
  xit("PUSH 체크박스를 클릭하게 되면 해당 체크박스가 활성화된다.")
  xit("PUSH 체크박스를 클릭하고 다시 체크를 하면 비활성화 되면서 값이 0으로 변경된다");
  xit("구분값을 학생으로 설정한 상태에서 PUSH의 값을 변경시킨 후 구분값으로 교수로 변경하고 다시 학생으로 학생값에서 변경되지 않는 데이터가 표시된다");
  xit("PUSH값을 입력하게 될 때 placeholder의 값은 숫자+건수의 형태로 되어 있으며 클릭을 하게 된다면 숫자로 표시된다.");

});

