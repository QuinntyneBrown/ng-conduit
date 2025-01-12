import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Home } from './home.component';

describe(Home.name, () => {
  let fixture: ComponentFixture<Home>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).createComponent(Home);
  });

  it('should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
