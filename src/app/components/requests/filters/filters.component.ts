import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  dificultyItems? = [
    { id: 2, name: 'Facultate' },
    { id: 1, name: 'Liceu' },
    { id: 0, name: 'Generala' },
  ];
  dificultyFilters: string[] = [];
  categoryFilters: string[] = [];
  querry?: string;
  categories: Category[] = [];
  //checkFaculty:boolean = false;
  currentPage: number = 1;

  filters = new FormGroup({
    checkFaculty: new FormControl(false),
    checkHighSchool: new FormControl(false),
    checkPrimary: new FormControl(false),
  });
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.getCurrentPage();
  }

  ngOnInit(): void {
    this.getCategories();
    this.querry = this.router.url.split('?')[1];
    this.getFiltersFromLocal();
    //   if (this.querry != null) {
    //     this.dificulty = this.router.url.split('dificulty=')[1];
    //     if (this.dificulty != null) {
    //       if (this.dificulty.indexOf('&'))
    //         this.dificulty = this.dificulty.split('&')[0];
    //     }
    //     console.log('checkDif ' + this.querry);
    //     if (this.dificulty == '2')
    //       this.filters.patchValue({ checkFaculty: true });
    //     if (this.dificulty == '1')
    //       this.filters.patchValue({ checkHighSchool: true });
    //     if (this.dificulty == '0')
    //       this.filters.patchValue({ checkPrimary: true });

    //     if (this.querry != null) {
    //       this.getCurrentPage();
    //     } else this.currentPage = 1;
    //   }
    //   console.log(this.dificulty);
  }
  getCurrentPage() {
    this.currentPage = Number(this.querry?.split('page=')[1]);
    if (this.currentPage == null && this.currentPage == NaN)
      this.currentPage = 1;
    console.log(this.currentPage);
  }
  setDificulty(id: number) {
    var filterString = 'dificulty=' + id + '&';
    if (this.dificultyFilters.includes(filterString)) {
      this.dificultyFilters.forEach((item, index) => {
        if (item === filterString) this.dificultyFilters.splice(index, 1);
      });
    } else this.dificultyFilters.push(filterString);
    this.saveFiltersLocally('dificulty');
    this.navitateToQuery();
    // console.log('set filters');
    // this.dificulty = '';
    // if (this.filters.value.checkFaculty && dif == 2)
    //   this.dificulty = 'dificulty=2';
    // else if (this.filters.value.checkHighSchool && dif == 1)
    //   this.dificulty = 'dificulty=1';
    // else if (this.filters.value.checkPrimary && dif == 0)
    //   this.dificulty = 'dificulty=0';
    // this.querry = '?' + this.dificulty;
    // console.log(this.querry);
    // this.router.navigate(['/requests'], {
    //   queryParams: { dificulty: this.dificulty },
    // });
  }
  changePage(number: number) {
    this.currentPage = number;
    /// add to query
    ///goto query

    // this.router.navigate(['/requests?page='+number]);
  }
  setCategory(id?: number) {
    var filterString = 'category=' + id + '&';
    if (this.categoryFilters.includes(filterString)) {
      this.categoryFilters.forEach((item, index) => {
        if (item === filterString) this.categoryFilters.splice(index, 1);
      });
    } else this.categoryFilters.push(filterString);
    this.saveFiltersLocally('category');
    this.navitateToQuery();
  }

  navitateToQuery() {
    if (this.dificultyFilters != null || this.categoryFilters != null) {
      this.querry = '?';
      this.categoryFilters.forEach((element) => {
        this.querry = this.querry + element;
      });
      this.dificultyFilters.forEach((element) => {
        this.querry = this.querry + element;
      });
    }
    if (this.currentPage > 1)
      this.querry = this.querry + 'page=' + this.currentPage;
    this.router.navigateByUrl('/requests' + this.querry);
  }
  getFiltersFromLocal() {
    var valueArray = localStorage.getItem('category')?.split('|');
    var valueDifArray = localStorage.getItem('dificulty')?.split('|');
    if (valueArray != null) {
      valueArray?.forEach((element) => {
        if (element != '|' && element != '') this.categoryFilters.push(element);
      });
    }
    if (valueArray != null) {
      valueDifArray?.forEach((element) => {
        if (element != '|' && element != '')
          this.dificultyFilters.push(element);
      });
    }
    console.log(this.categoryFilters);
  }
  saveFiltersLocally(filterName: string) {
    var values = '';
    if (filterName == 'category') {
      this.categoryFilters.forEach((element) => {
        values = values + element + '|';
      });
    }
    if (filterName == 'dificulty') {
      this.dificultyFilters.forEach((element) => {
        values = values + element + '|';
      });
    }

    console.log(filterName, values);
    localStorage.setItem(filterName, values);
  }

  getCategories() {
    this.categoryService
      .getCategories()
      .subscribe((r) => (this.categories = r['value']));
  }
}
