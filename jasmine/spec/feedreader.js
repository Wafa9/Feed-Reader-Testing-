$(
  (function() {
    describe("RSS Feeds", function() {
      it("feeds are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      it("urls are defined", function() {
        for (var i = 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].url).toBeDefined();
          expect(allFeeds[i].url.length).not.toBe(0);
        }
      });

      it("names are defined", function() {
        for (var i = 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].name).toBeDefined();
          expect(allFeeds[i].name.length).not.toBe(0);
        }
      });
    });

    describe("The Menu", function() {
      it("menu element is hidden", function() {
        expect($("body").hasClass("menu-hidden")).toEqual(true);
      });

      it("working toggle on click event", function() {
        $(".menu-icon-link").trigger("click");
        expect($("body").hasClass("menu-hidden")).toBe(false);
        $(".menu-icon-link").trigger("click");
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    describe("Initial Entries", function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it("define if feed has at least a single entry", function() {
        expect($(".feed .entry").length).toBeGreaterThan(0);
      });
    });

    describe("New Feed Selection", function() {
      var firstFeed, secondFeed;

      beforeEach(function(done) {
        loadFeed(1, function() {
          console.log("First feed loaded!");

          firstFeed = $(".feed").html();
          loadFeed(2, function() {
            console.log("Second feed loaded!");
            done();
          });
        });
      });

      afterEach(function() {
        loadFeed(0);
      });

      it("checks if two feeds are different", function() {
        secondFeed = $(".feed").html();
        expect(firstFeed).not.toEqual(secondFeed);
      });
    });
  })()
);
