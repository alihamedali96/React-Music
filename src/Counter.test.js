import {screen} from "@testing-library-react";
import Counter from "./componentsDemo/Counter";

describe("counter", ()=>{
    beforeEach(()=>render(<Counter/>))
    
    
    test("It loads Counter at 0", ()=> {
            const counter = screen.getByRole("figure")//look into roles in queries testing library documentation
            expect(counter.textContent).toBe("0");
    })

    test("Clicking increases counter by one", ()=> {
        const counter = screen.getByRole("figure");
        const button = screen.getByRole('button',{name:"add one"})
       // userEvent.click(button)
        fireEvent.click(button)
        expect(counter.textContent).toBe("1");
})


})
