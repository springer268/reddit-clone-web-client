export class Community {
	name: string

	public static fetchByName = async (name: Community['name']): Promise<Community> => {
		return new Promise<Community>(resolve => resolve({ name }))
	}
}
