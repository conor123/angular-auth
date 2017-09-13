import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';

describe('Component: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [AppComponent ]
    });
  })

  it('Should Create Home Component', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should Display the Home Heading 2 Text', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.nativeElement;
    const content = app.querySelector('h2').textContent;
    expect(content).toContain('Signup');
  });
});

