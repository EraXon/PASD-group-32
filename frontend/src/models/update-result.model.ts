interface UpdateResult {
    acknowledged: boolean,
    modifiedCount: number,
    upsertedId: any,
    upsertedCount: number,
    matchedCount: number
}

export type {
    UpdateResult
}