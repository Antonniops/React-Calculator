import { describe, expect, it } from "vitest";

const canConfigure = (from, to) => {
    if(typeof from !== 'string') throw new Error('From parameter must be a string')

    if(typeof to !== 'string') throw new Error('To parameter must be a string')

    if(from.length !== to.length) return false

    const hasSameUniqueLetters = new Set(from).size === new Set(to).size

    if(!hasSameUniqueLetters) return false

    return true
}

describe('canReconfigure',() => {
    it('should be a function', () =>{
        expect(canConfigure).toBeTypeOf('function')
    })

    it('should throw error if first parameter is missing', () => {
        expect( ()=> canConfigure()).toThrow()
    })

    it('should throw error if first parameter is not a string', () => {
        expect( () => canConfigure(1000)).toThrow()
    })

    it('should throw error if second parameter is missing', () => {
        expect( ()=> canConfigure('AOB')).toThrow()
    })

    it('should throw error if second parameter is not a string', () => {
        expect( () => canConfigure('ADB', 1000)).toThrow()
    })

    it('should return a boolean', () => {
        expect(canConfigure('ACB', 'BCA')).toBeTypeOf('boolean')
    })

    it('should return false if strings provided have different length', () => {
        expect(canConfigure('ACB', 'EO')).toBe(false)
    })

    it('should return false if string provided have different number of unique letters', () => {
        expect(canConfigure("ABC", "ABB")).toBe(false);
    })

   
})