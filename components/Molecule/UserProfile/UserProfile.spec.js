/*
import {mount, shallowMount} from "@vue/test-utils";
import UserProfile from "@/components/Molecule/UserProfile/UserProfile";

let UserProfileWrapper;
beforeEach(() => UserProfileWrapper = mount(UserProfile)); // SetUp
afterEach(() => UserProfileWrapper = null); // TearDown

describe('UserProfile.vue', () => {
  it("UserProfile 컴포넌트가 정상적으로 랜더링 되는가?", () => {
    expect(UserProfileWrapper.exists()).toBeTruthy();
  });
  it("남은 메시지 수 천단위 콤마 찍기", async () => {
    //given
    const RemainMessageWrapper = UserProfileWrapper.find('[data-test="remain-message"]');
    //when
    await UserProfileWrapper.setProps({message: {
        LMS:0,
        MMS:0,
        SMS:0,
        PUSH:1000
      }})
    //then
    expect(RemainMessageWrapper.text()).toBe("1,000건");
    //when
    await UserProfileWrapper.setProps({message: {
        LMS:0,
        MMS:0,
        SMS:0,
        PUSH:1000000
      }})
    //then
    expect(RemainMessageWrapper.text()).toBe("1,000,000건");
  })
  it("남은 알림 수 콤마 찍기", async () => {
    //given
    const unReadNotificationWrapper = UserProfileWrapper.find('[data-test="unread-notification"]');
    //when
    await UserProfileWrapper.setProps({notification:{count: 1000}})
    //then
    expect(unReadNotificationWrapper.text()).toBe('1,000개');

    //when
    await UserProfileWrapper.setProps({notification:{count:  1000000}})
    expect(unReadNotificationWrapper.text()).toBe("1,000,000개");
  })
  it("남은 메시지, 알림 수가 0인경우 0건,0개로 표시가 되어야 함",async ()=>{
    //given
    const remainMessageWrapper = UserProfileWrapper.find('[data-test="remain-message"]');
    const unReadNotificationWrapper = UserProfileWrapper.find('[data-test="unread-notification"]');
    //when
    await UserProfileWrapper.setProps({
      remainMessageCount:0,
      unreadNotificationCount:0
    });

    expect(remainMessageWrapper.text()).toBe("0건");
    expect(unReadNotificationWrapper.text()).toBe("0개");
    //then
  })
  it("남은 메시지, 알림 수가 0보다 작거나 문자가 들어온 경우 Error 표시하기",()=>{
  });

});

describe("UserProfile 메세지 , 알림 관련 테스트",()=>{
  let remainMessageWrapper;
  let remainMessageToolTip;
  beforeEach(()=>{
     remainMessageWrapper = UserProfileWrapper.find('[data-test="remain-message"]');
     remainMessageToolTip = UserProfileWrapper.find('[data-test="remain-message-tooltip"]');
  })
  it("남은 메시지수를 호버한 후 위치에서 벗어나게 된다면 툴팁이 사라지는가 ",async()=>{
    //given

    //when
    await remainMessageWrapper.trigger("mouseover");
    await remainMessageWrapper.trigger("mouseleave");
    //then
    expect(remainMessageToolTip.find('[data-test="tooltip-text"]').isVisible()).toBeFalsy();
  });
  it("남은 메시지수를 호버할 경우 툴팁이 정상적으로 표시되는가",async ()=>{
    //given

    //when
    await remainMessageWrapper.trigger("mouseover");

    expect(UserProfileWrapper.find('[data-test="tooltip-text"]').classes()).toHaveSt
    //then
    expect(UserProfileWrapper.find('[data-test="tooltip-text"]').isVisible()).toBeTruthy();
  })
  it("남은 메세지수를 클릭할 경우 툴팁이 고정이 되는가",async ()=>{
    //given

    //when
    await remainMessageWrapper.trigger("click");
    await remainMessageWrapper.trigger("mouseleave");
    //then
    expect(UserProfileWrapper.find('[data-test="tooltip-text"]').isVisible()).toBeTruthy();
  });

})
*/
