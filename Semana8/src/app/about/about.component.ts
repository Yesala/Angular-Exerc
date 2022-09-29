import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  numeros : string[] = []

  intervalo$ = interval(1000).pipe( take(10) )
  abecedario$ = of('a', 'b', 'c', 'd').pipe(
    tap(data => console.log('tap: ', data))
  )
  clicks$ = fromEvent(document, 'click')

  ngOnInit(): void {
    this.intervalo$.pipe(
      map( n => `Cuenta: ${n+1}` ),
      take(3)
    ).subscribe({
       next: data => this.numeros.push(data),
       error: err => console.warn('Error: ', err),
       complete: () => console.log("Interval completed")
    })
    this.abecedario$.subscribe(data => console.log('ABC subscripción: ', data))
    this.clicks$.pipe(
      map<any, any>( ({ x, y }) => ({ x, y }) )
    ).subscribe(console.log)
  }
}
