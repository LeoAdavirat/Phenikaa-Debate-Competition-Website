monster_state = "Monster idle!"
def switchValue():
    global monster_state
    monster_state = "Monster triggered!" if monster_state == "Monster idle!" else "Monster idle!"
for i in range(10):
    switchValue()
    print(monster_state)
