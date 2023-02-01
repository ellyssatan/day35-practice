import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Subject } from "rxjs";
import { Game } from "./model";

    const BACKEND = "http://localhost:8080"

@Injectable()
export class BGGService {

    constructor(private httpclient: HttpClient) { }

    onSearchResults = new Subject<Game[]>()
    onSearchQuery = new Subject<string>()

    searchGameByName(name: string): Promise<Game[]> {
        this.onSearchQuery.next(name)
        const params = new HttpParams().set("name", name)
        return firstValueFrom(
            this.httpclient.get<Game[]>(`${BACKEND}/api/games`, { params })
        )
        .then(results => {
            this.onSearchResults.next(results)
            return results
        })
    }
}