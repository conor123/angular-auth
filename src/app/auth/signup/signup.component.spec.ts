import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupComponent } from './signup.component';
import { AppComponent } from '../../app.component';
import { FormsModule } from "@angular/forms";

describe('Component: Signup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [AppComponent]
    });
  })

  it('Should Create Signup Component', () => {
    let fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();

    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should Contain the header 1 text: 'Signup'`, () => {
    let fixture = TestBed.createComponent(SignupComponent);
    let app = fixture.debugElement.nativeElement;
    //fixture.detectChanges();
    let content = app.querySelector('h1').textContent;
    expect(content).toContain('Signup');
  });
});


