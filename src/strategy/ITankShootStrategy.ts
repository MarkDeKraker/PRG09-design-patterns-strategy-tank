// De ITankShootStrategy beschrijft wat de TankShootStrategy allemaal kan doen.
// In dit voorbeeld zie je dat er een functie fire is die niks returned.
// Deze interface kan je hergebruiken bij alle bullets, want elke bullet heeft de fire() nodig. 
interface ITankShootStrategy{
    fire(): void
}