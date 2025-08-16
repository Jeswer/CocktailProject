export type Cocktail = {
  ID: string
  drinkTitle: string
  drinkThumb: string
  instructions?: string
  [key: string]: string | undefined
}
