import {Component, input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    NgClass,
    FaIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  imageUrl = input<string>();
  avatarSize = input<"avatar-sm" | "avatar-xl">();
  protected readonly faUser = faUser;
}
