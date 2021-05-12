import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ name: 'test', namespaced: true })
class ActiveInventory extends VuexModule {
  reservationsNos: number
  inventoryId: number
  @Mutation
  public setNoOFReservations(newNo: number): void {
    this.reservationsNos = newNo
  }
  @Mutation
  public setActiveInventory(newName: number): void {
    this.inventoryId = newName
  }

  @Action
  public updateNoOFReservations(newNos: number): void {
    this.context.commit('setNoOFReservations', newNos)
  }

  @Action
  public updateActiveInventory(newID: number): void {
    this.context.commit('setActiveInventory', newID)
  }
}
export default ActiveInventory