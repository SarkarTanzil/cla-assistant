
declare var contributors: any;
declare var contributor: any;

import {Component, ElementRef, Input} from 'angular2/core';
import {NgClass, NgFor, DatePipe} from 'angular2/common';

@Component({
    directives: [NgClass, NgFor],
    pipes: [DatePipe],
    selector: 'contributors-modal',
    templateUrl: '/client/home/repo/contributors.modal.html',
})


export class ContributorsModal {
    @Input() public gistName: string;
    @Input() public repo: any;
    @Input() public contributors: any;

    public reverse: boolean;
    public column: string;
    public loading: boolean;

    public updatedDate = new Date('2016-03-19T01:09:25Z');

    public element: any;

    public contributor = {
        signed_at: this.updatedDate,
        user_name: 'Alpha-Beta',
    };


    constructor(el: ElementRef) {
        this.element = $(el.nativeElement);
        this.contributors = [];
        this.contributors.push(this.contributor);
        this.reverse = false;
        this.column = 'user_name';
        this.loading = false;

        this.repo = {
          name: '',
          onwer: ''
        };
    }

    public showContributors(repo) {
        this.repo = repo;
        this.element.modal('show');
    }

    public cancel() {
        this.element.modal('hide');
    }


}
