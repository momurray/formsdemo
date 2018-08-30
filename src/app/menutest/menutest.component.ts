import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgxPermissionsService } from 'ngx-permissions';

interface RMSMenuItem extends MenuItem {
    items?: RMSMenuItem[] | RMSMenuItem[][];
    roles?: string[];
}
@Component({
    selector: 'app-menutest',
    templateUrl: './menutest.component.html',
    styleUrls: ['./menutest.component.css']
})
export class MenutestComponent implements OnInit {

    constructor(private permissionsService: NgxPermissionsService) { }

    roles: string[] = [
        'ADMIN',
        'GUEST',
        'JOHNNY'
    ];

    items: RMSMenuItem[];

    hasPermission(myRoles: string[]): boolean {
        myRoles.forEach(m => {
            this.roles.forEach(o => {
                if (o.toUpperCase() == m.toUpperCase()) {
                    return true;
                }
            });
        })

        return false;
    }


    ngOnInit() {

        this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                roles: ['ADMIN', 'GUEST'],
                visible: false,
                items: [{
                    label: 'Google',
                    icon: 'pi pi-fw pi-plus',
                    url: 'https://www.google.com',
                    roles: ['GUEST'],
                    visible: false,
                    items: [
                        { label: 'User', icon: 'pi pi-fw pi-user-plus' },
                        { label: 'Filter', icon: 'pi pi-fw pi-filter' }
                    ]
                },
                { label: 'BBC', url: 'https://news.bbc.co.uk', icon: 'pi pi-fw pi-external-link', roles: ['JOHNNY'], visible: false },
                { separator: true },
                { label: 'Quit', icon: 'pi pi-fw pi-times' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                visible: true,
                expanded: true,
                roles: ['Roles Managemnet'],
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            {
                label: 'Toggle Edit',
                icon: 'pi pi-fw pi-cog',
                command: () => {
                    this.items.forEach(e => {
                        if (e.label == "Edit") {
                            e.visible = !e.visible;
                        }
                    });
                }
            }
        ];

        // this.items.forEach(o => {
        //     if (o.roles) {
        //         o.visible = this.hasPermission(o.roles);
        //     }
        // });

    }
}
