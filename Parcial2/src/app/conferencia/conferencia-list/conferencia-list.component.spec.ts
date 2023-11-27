import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenciaListComponent } from './conferencia-list.component';

describe('ConferenciaListComponent', () => {
  let component: ConferenciaListComponent;
  let fixture: ComponentFixture<ConferenciaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenciaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
