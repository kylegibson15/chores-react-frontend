export interface IDays { 
  monday: boolean, 
  tuesday: boolean, 
  wednesday: boolean, 
  thursday: boolean, 
  friday: boolean, 
  saturday: boolean, 
  sunday: boolean 
};

export interface IChore {
  completed: boolean;
  days: IDays,
  description: string,
  name: string,
  timeOfDay: string,
  _id: string
}