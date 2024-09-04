export function SyncModels(models) {
  models.map(async model => await model.sync())
}