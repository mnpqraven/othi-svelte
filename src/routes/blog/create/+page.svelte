<div class="flex flex-col gap-2">
  <div class="flex justify-between">
    <a href="/blog">back</a>
  </div>

  <form class="flex flex-col" method="POST">
    <label>
      Name
      <input name="name" type="text" class="border" />
    </label>

    <label>
      Content
      <textarea name="content" cols="30" rows="10" class="border" />
    </label>

    <button type="submit">Create post</button>
  </form>
</div>
