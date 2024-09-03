var obj = JSON.parse($response.body);

obj=
{
  "account": {
    "id": 3754055,
    "now": "2024-09-03T14:46:04",
    "is_email_confirmed": true,
    "registered_at": "2024-09-03T14:41:12",
    "pro_mode": true,
    "user_id": 3754835,
    "need_to_update_subscription": false,
    "two_factor_auth": false,
    "full_name": "",
    "company": "",
    "address": "",
    "country_code": "",
    "email": "cfkxrctvpf@privaterelay.appleid.com",
    "plan_type": "Trial",
    "user_type": "Trial",
    "current_period": {
      "from": "2024-09-03T14:41:12",
      "until": "2099-09-17T14:41:12"
    },
    "feature_toggles": {
      "encryption_schema": "v5"
    },
    "authorized_features": {
      "show_create_team_promotions": true,
      "show_bell": true,
      "show_trial_section": false,
      "show_subscription_section": true,
      "show_github_account_section": true,
      "show_team_member_activation_into_identities_tour": false,
      "show_pop_up_onboarding_tour": false,
      "generate_multi_key_pair": false,
      "show_presence_effect": false,
      "show_multi_key_promotion": true,
      "available_github_partnership": true,
      "is_eligible_for_trial_extend": false,
      "esso_available": false,
      "shell_assist": true,
      "multiple_vaults": false,
      "websocket_sync": true
    },
    "promotions": {
      "has_desktop_device": true,
      "upgrade_to_business_via_vaults": true,
      "upgrade_to_business_dialog_type": "VIA_VAULTS_FOR_PRO_USER",
      "first_import_on_desktop": true
    },
    "expired_screen_type": null,
    "has_sso": true,
    "updated_at": "2024-09-03T14:41:14",
    "is_subscribed_to_marketing_emails": true,
    "tax_id": "",
    "team": false,
    "team_display_name": ""
  },
  "team": null,
  "trial": {
    "valid_until": "2099-09-17T14:41:12",
    "created_at": "2024-09-03T14:41:12",
    "is_active": true,
    "downgraded_from": null,
    "trial_type": "Individual"
  },
  "student": null,
  "personal_subscription": true,
  "team_subscription": null,
  "access_objects": [
    {
      "period": {
        "start": "2024-09-03T14:41:12",
        "end": "2099-09-17T14:41:12"
      },
      "title": "Trial"
    }
  ]
};
$done({body: JSON.stringify(obj)});
