member_selector = dropbox.sharing.MemberSelector.email("user@example.com")
add_member =  dropbox.sharing.AddMember(member_selector)
members = [add_member] # this can contain more than one member to add

res = dbx.sharing_add_folder_member(shared_folder_id, members)