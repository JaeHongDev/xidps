import { mutations, getters} from "@/store/callerManager/index";


const {insertCallerManager} = mutations;

describe('callerManager store file', () => {
  let state;
  beforeEach(() => {
    state = {
      managers: []
    };
  })
  it("callerManager 스토어의 값이 처음 등록될 경우 배열의 맨 앞에 정상적으로 등록이 되는가", () => {
    //given
    const callerNumber = "010-0000-0000";
    //when
    insertCallerManager(state, callerNumber);
    //then
    expect(state.managers[0].number).toBe(callerNumber);
  })

  it("callerManager state 에서 2번째 인덱스에 존재하는 값이 다른 값으로 변경된다면 정상적으로 변경이 되는가 ", () => {
    //given
    insertCallerManager(state, "010-0000-0000"); //0
    insertCallerManager(state, "010-0000-0001"); //1
    insertCallerManager(state, "010-0000-0003"); //2
    const index = 2;
    const updatedValue = {
      name: "변경된 이름1",
      department: "변경된 조직",
      memo: "변경된 메모"
    };
    //when
    mutations.updateByIndex(state, {index, payload:updatedValue});
    const targetCallerManager = state.managers[2];
    //then
    expect(targetCallerManager.name).toBe(updatedValue.name);
    expect(targetCallerManager.department).toBe(updatedValue.department);
    expect(targetCallerManager.memo).toBe(updatedValue.memo);
  })

  it("callerManager state에서 첫번째 배열의 데이터를 삭제했을 경우 정상적으로 삭제가 된다.",()=>{
    // 먼저 2개의 데이터를 집어 넣었을 경우
    // 마지막에 입력된 데이터가 0번째 배열에 존재하는데
    // 0번째 배열의 데이터를 지울 경우 0번째 배열의 값은 1번째 배열의 값이 된다.

    //given
    insertCallerManager(state, "010-0000-0000");
    insertCallerManager(state, "010-0000-0001");
    const index = 0;
    //when
    mutations.removeByIndex(state,index);
    //then
    expect(state.managers[0].number).toBe("010-0000-0000");
  })

  it("callerManager state에서 여러건의 배열이 삭제가 가능하다",()=>{
    //given
    insertCallerManager(state, "010-0000-0000");
    insertCallerManager(state, "010-0000-0001");
    insertCallerManager(state, "010-0000-0002");
    insertCallerManager(state, "010-0000-0004");
    insertCallerManager(state, "010-0000-0005");

    //현재 5건의 데이터를 등록했다.
    expect(state.managers).toHaveLength(5);
    //when
    mutations.removeByIndexes(state,[0,1,2]);
    //then
    expect(state.managers).toHaveLength(2) ;
    expect(state.managers[0].number).toBe("010-0000-0001")
    expect(state.managers[1].number).toBe("010-0000-0000")
  })

  it("callerManager state에서 특정 단어를 가진 항목에 대한 검색이 정상적으로 이루어지는가.",()=>{
    //given
    insertCallerManager(state,"010-0000-0000");
    insertCallerManager(state,"010-0000-0001");
    insertCallerManager(state,"011-0000-0002");
    insertCallerManager(state,"011-0000-0003");
    //when
    const result = getters.findByName(state,{
      columName:"number",
      searchWord:"011"
    })
    //then
    expect(result).toHaveLength(2);
    expect(state.managers[0].number).toBe("011-0000-0003");
    expect(state.managers[1].number).toBe("011-0000-0002");
  })

  it("callerManager state에서 INSERT/SELECT에서 edit상태로 변경한다.",()=>{
    //given
    insertCallerManager(state,"010-0000-0000");
    insertCallerManager(state,"010-0000-0001");
    //when
    mutations.editState(state,0);
    mutations.editState(state,1);
    //then
    expect(state.managers[0].editable).toBeTruthy();
    expect(state.managers[1].editable).toBeTruthy();
  })

  it("callerManager state에서 edit상태를 취소 한다.",()=>{
    //given
    insertCallerManager(state,"010-0000-0000");
    insertCallerManager(state,"010-0000-0001");
    //when
    mutations.editState(state,0);
    mutations.editState(state,1);

    //when
    mutations.cancelEditState(state,0);
    mutations.cancelEditState(state,1);

    //then
    expect(state.managers[0].editable).toBeFalsy();
    expect(state.managers[1].editable).toBeFalsy();
  })
});
