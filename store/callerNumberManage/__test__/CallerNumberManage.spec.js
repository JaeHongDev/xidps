import mutations from "@/store/callerNumberManage/mutations";
import getters from "@/store/callerNumberManage/getters";

let context = {
  state: {
    callerNumbers: []
  },
  mutations,
  getters
};

const createDefaultCallerNumber = ({v_index, number, manager, department, status, memo}) => ({
  v_index,
  number: number ?? "",
  manager: manager ?? "",
  department: department ?? "",
  status: status ?? "",
  memo: memo ?? ""
})


describe('CallerNumberManage mutation test', () => {
  beforeEach(() => {
    context.state.callerNumbers = []
  })

  it("새로운 발신번호를 집어넣게 되면 배열의 맨 앞에 입력이 된다", () => {
    console.log(context);
    //given
    mutations.insertNew(context, createDefaultCallerNumber({v_index: 1}));
    mutations.insertNew(context, createDefaultCallerNumber({v_index: 2}));
    //when

    //then

    expect(context.state.callerNumbers[0].v_index).toBe(2);
    expect(context.state.callerNumbers[1].v_index).toBe(1);
  })
  it("발신번호 051-000-0000의 담당자를 A일때 B로 변경한다.", () => {
    mutations.insertNew(context, {
      callerNumber: createDefaultCallerNumber({v_index: 1, number: "051-000-0000", manager: "A"}),
    })
    const index = getters.findByIndex(context)({v_index: 0})

    mutations.updateRow(context, {
      callerNumber: context.state.callerNumbers[index],
      updatedCallerNumber: {
        manager: "B"
      }
    })
    expect(context.state.callerNumbers[index].manager).toBe("B");

  })
  xit("세가지의 발신번호 (051-000-0000, 051-000,0001,051-000,0002 ) 051-000-0000의 번호를 삭제한다.", () => {
  })
  xit("세가지의 발신번호 (051-000-0000, 051-000,0001,051-000,0002 )에서 앞에 0000, 0001 2 번호를 삭제한다.", () => {
  });
});

describe("callerNumberManage getter test", () => {
  xit("담당자의 이름이 남으로 시작하는 사람을 찾는다", () => {
  });
  xit("아이디가 주어지면 해당 아이디값과 일치하는 인덱스를 찾을 수 있다.", () => {

  })
})



